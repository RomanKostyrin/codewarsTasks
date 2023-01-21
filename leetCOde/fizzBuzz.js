var fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    let value = "";
    if (i % 3 === 0) {
      value += "Fizz";
    }
    if (i % 5 === 0) {
      value += "Buzz";
    }
    arr.push(value || i.toString());
  }
  return arr;
};
