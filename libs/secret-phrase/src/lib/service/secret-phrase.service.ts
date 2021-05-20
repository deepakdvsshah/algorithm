import { Injectable } from '@angular/core';
import { CharacterMap } from '@rabbi-challenge/character-map';
import { Md5 } from 'md5-typescript';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SecretPhraseService {
  secretPhrase: [];

  constructor(protected httpClient: HttpClient) { }
  loadFile(fileName: string) {
    return this.httpClient.get(`assets/${fileName}`, {
      responseType: 'text' as 'json',
    });
  }
  private generatePhrase = function (
    wordList: Array<string>,
    anagramCharMap: CharacterMap,
    wordCount: number
  ): Generator<Array<string>> {
    const phrase = [];
    const currentPhraseCharMap = new CharacterMap();
    function* fn(wordCountIndex, vm) {
      //Condition for last word
      if (wordCountIndex === wordCount - 1) {
        //Length check for total anagram length
        const remainWordLength =
          anagramCharMap.length - currentPhraseCharMap.length;
        // Get all valid word list
        const filteredWordList = wordList.filter(
          //Remaining last word length check and then check for all character set are same for given phrase
          (word) =>
            word.length === remainWordLength &&
            currentPhraseCharMap.isValidAnagramForWord(anagramCharMap, word)
        );
        // permutation all valid words with generator function and yield to check hash
        for (const word of filteredWordList) {
          phrase[wordCountIndex] = word;
          yield* vm.permutationPhrases(phrase);
        }
      } else {
        for (const word of wordList) {
          if (phrase[wordCountIndex]) {
            //sync character set of phrase with new words in each iteration
            currentPhraseCharMap.removeChars(phrase[wordCountIndex]);
            phrase[wordCountIndex] = '';
          }
          // if the current phrase suitable for given anagram yield to the secretPhrases function for check hash
          if (
            currentPhraseCharMap.isValidAnagramForWord(anagramCharMap, word)
          ) {
            currentPhraseCharMap.addChars(word);
            phrase[wordCountIndex] = word;
            yield* fn(wordCountIndex + 1, vm);
          }
        }
      }
    }
    return fn(0, this);
  };

  secretPhrases(
    wordList: Array<string>,
    anagramCharMap: CharacterMap,
    hashValues: Array<string>
  ) {
    let wordCount = 1;
    const secretPhrase = [];
    while (hashValues.length > 0 && wordCount <= 3) {
      for (const phrase of this.generatePhrase(
        wordList,
        anagramCharMap,
        wordCount
      )) {
        const hash = Md5.init(phrase.join(' '));
        const index = hashValues.indexOf(hash);
        if (index > -1) {
          const fullPhrase = phrase.join(' ');
          secretPhrase.push({ hash, fullPhrase });
          hashValues.splice(index, 1);
          // if we want to search more phrase
          // if (hashValues.length === 0) break;
          return secretPhrase;
        }
      }
      wordCount++;
    }
    // if we want to search more phrase
    // return secretPhrase;
  }
  private permutationPhrases(
    phraseArr: Array<string>,
    perms = [],
    len: number = phraseArr.length
  ): object[] {
    if (len === 1) perms.push(phraseArr.slice(0));
    else
      for (let i = 0; i < len; i++) {
        this.permutationPhrases(phraseArr, perms, len - 1);
        len % 2
          ? ([phraseArr[0], phraseArr[len - 1]] = [
            phraseArr[len - 1],
            phraseArr[0],
          ])
          : ([phraseArr[i], phraseArr[len - 1]] = [
            phraseArr[len - 1],
            phraseArr[i],
          ]);
      }
    return perms;
  }

  // different way for permutation
  // permutationPhrases = function* (arr: Array<string>): Generator<Array<string>> {
  //   if (arr.length === 1) return yield arr;
  //   const [first, ...rest] = arr;
  //   for (const perm of this.permutationPhrases(rest)) {
  //     for (let i = 0; i < arr.length; i++) {
  //       yield [...perm.slice(0, i), first, ...perm.slice(i)];
  //     }
  //   }
  // }
}
