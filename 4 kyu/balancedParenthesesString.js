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

const cacheTen = [];
const cacheTwenty = [];

function balancedParens(n, k) {
  const last = Number(k);
  if (n === 0) return "";
  let counter = 0;
  let i = 2 ** (n * 2);
  if (n === 10) {
    if (cacheTen.at(-1) && cacheTen.at(-1)[0] < last) {
      i = cacheTen.at(-1)[1];
      counter = cacheTen.at(-1)[0];
      console.log("CASHE ", cacheTen.at(-1), last, i);
    }
  }
  if (n === 20) {
    if (cacheTwenty.at(-1) && cacheTwenty.at(-1)[0] < last) {
      i = cacheTwenty.at(-1)[1];
      counter = cacheTwenty.at(-1)[0];
      console.log("CASHE ", cacheTwenty.at(-1), last, i);
    }
  }
  while (i !== 1 && counter - 1 < last + 1) {
    const variant = i
      .toString(2)
      .padStart(n * 2, 0)
      .replaceAll("0", ")")
      .replaceAll("1", "(");
    if (isVariantValid(variant)) {
      if (n === 10) {
        cacheTen.push([counter, i]);
      }
      if (n === 20) {
        cacheTwenty.push([counter, i]);
      }
      if (counter === last) {
        console.log("-------------------");
        return variant;
      }
      counter++;
    }
    i--;
  }
}
