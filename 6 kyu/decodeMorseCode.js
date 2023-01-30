decodeMorse = function (morseCode) {
  const parsed = morseCode.trim().split("  ").join(" ").split(" ");
  return parsed
    .map((el) => MORSE_CODE[el])
    .map((el) => (el ? el : " "))
    .join("");
};
