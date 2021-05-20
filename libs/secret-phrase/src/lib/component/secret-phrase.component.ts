import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterMap } from '@rabbi-challenge/character-map';
import { SecretPhraseService } from '../service/secret-phrase.service';

enum LocalHashValues {
  EASY_HASH = 'e4820b45d2277f3844eac66c903e84be',  // Easy
  MEDIUM_HASH = '23170acc097c24edb98fc5488ab033fe', //Medium
  HARD_HASH = '665e5bcb0c20062fe8abaaf4628bb154' //Hard
}
@Component({
  selector: 'rabbi-challenge-secret-phrase',
  templateUrl: './secret-phrase.component.html',
  styleUrls: ['./secret-phrase.component.scss'],
})
export class SecretPhraseComponent {
  private wordList: Array<string>;
  private anagramCharMap: CharacterMap;
  public anagramForm: FormGroup;
  private hashValues = [];
  secretPhrase = [];
  isSubmit = true;

  constructor(
    protected secretPhraseService: SecretPhraseService,
    private formBuilder: FormBuilder
  ) {
    this.anagramForm = this.formBuilder.group({
      anagramPhrase: '',
      easyHash: '',
      mediumHash: '',
      hardHash: '',
    });
  }
  findPhrase() {
    this.isSubmit = false;
    this.secretPhrase = [];

    const localHashValues = [
      LocalHashValues.EASY_HASH,
      LocalHashValues.MEDIUM_HASH,
      LocalHashValues.HARD_HASH
    ];
    const fileName = 'wordlist';
    const anagramPhrase =
      this.anagramForm.value.anagramPhrase || 'poultry outwits ants';
    this.anagramForm.value.easyHash
      ? this.hashValues.push(this.anagramForm.value.easyHash)
      : null;
    this.anagramForm.value.mediumHash
      ? this.hashValues.push(this.anagramForm.value.mediumHash)
      : null;
    this.anagramForm.value.hardHash
      ? this.hashValues.push(this.anagramForm.value.hardHash)
      : null;
    this.hashValues =
      this.hashValues.length > 0 ? this.hashValues : localHashValues;
    this.secretPhraseService.loadFile(fileName).subscribe((data: string) => {
      const wordList = data.split('\n');
      const anagramCharMap = new CharacterMap(anagramPhrase.replace(/ /g, ''));
      const filteredWordList = wordList.filter((word) =>
        anagramCharMap.isValidAnagramForItself(word)
      );
      const hash = [...this.hashValues];
      this.secretPhrase = this.secretPhraseService.secretPhrases(
        [...new Set(filteredWordList)],
        anagramCharMap,
        hash
      );
      this.isSubmit = true;
    });
  }
}
