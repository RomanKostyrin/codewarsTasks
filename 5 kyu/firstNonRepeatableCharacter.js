function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].toLowerCase();
    if (s.toLowerCase().indexOf(letter) === s.toLowerCase().lastIndexOf(letter))
      return s[i];
  }
  return "";
}
