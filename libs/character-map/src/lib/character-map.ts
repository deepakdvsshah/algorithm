export class CharacterMap {
  chars: {};
  length: number;
  constructor(string = '') {
    this.chars = this.getChars(string);
    this.length = string.length;
  }

  //Get Char for current Anagram string
  getChars(string = '') {
    return string.split('').reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1;
      return obj;
    }, {});
  }

  //Add Char for current Anagram string
  addChars(string = '') {
    const addingChars = this.getChars(string);
    for (const c in addingChars) {
      this.chars[c] = (this.chars[c] || 0) + addingChars[c];
    }
    this.length += string.length;
  }

  //Remove char
  removeChars(string = '') {
    for (const c of string) {
      this.chars[c]--;
    }
    this.length -= string.length;
  }

  //Valid anagram for same word
  isValidAnagramForItself(string = '') {
    const obj = {};
    for (const c of string) {
      obj[c] = (obj[c] || 0) + 1;
      if (!(obj[c] <= this.chars[c])) {
        return false;
      }
    }
    return true;
  }

  //Valid anagram for provide word
  isValidAnagramForWord(anagramCharMap, string = '') {
    const obj = { ...this.chars };
    for (const c of string) {
      obj[c] = (obj[c] || 0) + 1;
      if (!(obj[c] <= anagramCharMap.chars[c])) {
        return false;
      }
    }
    return true;
  }
}
