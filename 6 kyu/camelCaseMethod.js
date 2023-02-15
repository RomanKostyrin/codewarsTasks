String.prototype.camelCase = function () {
  const string = this;
  return string
    .split(" ")
    .map(
      (el) => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase()
    )
    .join("");
};
