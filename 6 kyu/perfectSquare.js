function perfectSquare(string) {
  const g = string.split("\n");
  const regexp = /[.\s]/g;
  return string.replace(regexp, "").length !== 0
    ? false
    : g.every((el) => el.length === g.length);
}
