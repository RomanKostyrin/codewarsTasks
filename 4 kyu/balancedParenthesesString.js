const getLength = (string, letter) => string.replaceAll(letter, "").length;

const isVariantValid = (variant) => {
  if (getLength(variant, ")") !== variant.length / 2) return false;
  let queue = "";
  for (let j = 0; j < variant.length; j++) {
    queue += variant[j];
    if (getLength(queue, "(") > getLength(queue, ")")) return false;
  }
  return variant[0] === "(" && variant[variant.length - 1] === ")";
};

function balancedParens(n, k) {
  const last = Number(k);
  if (n === 0) return "";
  let counter = 0;
  let i = 2 ** (n * 2);
  while (i !== 1 && counter - 1 < last + 1) {
    const variant = i
      .toString(2)
      .padStart(n * 2, 0)
      .replaceAll("0", ")")
      .replaceAll("1", "(");
    if (isVariantValid(variant)) {
      i--;
      if (counter === last) {
        console.log(counter, k);
        return variant;
      }
      counter++;
    }
    i--;
  }
}

// UNRESOLVED
