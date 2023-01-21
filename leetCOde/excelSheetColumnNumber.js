var titleToNumber = function (columnTitle) {
  return columnTitle.split("").reduce((acc, letter, i) => {
    const weight =
      i === columnTitle.length - 1
        ? letter.charCodeAt() - 64
        : (letter.charCodeAt() - 64) * 26 ** (columnTitle.length - i - 1);
    return acc + weight;
  }, 0);
};
