function isPangram(string) {
  const arr = string
    .toLowerCase()
    .split("")
    .filter((el) => el.charCodeAt() >= 97 && el.charCodeAt() <= 122);
  return new Set(arr).size === 26;
}
