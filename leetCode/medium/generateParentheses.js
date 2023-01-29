const getLength = (string, letter) => string.replaceAll(letter, "").length;

const isVariantValid = (variant) => {
  if (getLength(variant, "0") !== getLength(variant, "1")) return false;
  let queue = "";
  for (let j = 0; j < variant.length; j++) {
    queue += variant[j];
    if (getLength(queue, "1") > getLength(queue, "0")) return false;
  }
  return variant[0] === "1" && variant[variant.length - 1] === "0";
};

var generateParenthesis = function (n) {
  const arr = [];
  let i = 1;
  while (i.toString(2).length <= n * 2) {
    const variant = i.toString(2).padStart(n * 2, 0);
    isVariantValid(variant) && arr.push(variant);
    i++;
  }
  return arr.map((el) => el.replaceAll("0", ")").replaceAll("1", "("));
};
