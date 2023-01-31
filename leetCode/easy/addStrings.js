var addStrings = function (num1, num2) {
  let memo = 0;
  let data = "";
  const length = Math.max(num1.length, num2.length);
  for (let i = 0; i < length; i++) {
    const number1 = num1[num1.length - 1 - i] || 0;
    const number2 = num2[num2.length - 1 - i] || 0;
    const result = memo + +number1 + +number2;
    data = result > 9 ? (result % 10) + data : result + data;
    memo = result > 9 ? 1 : 0;
  }
  return memo ? memo + data : data;
};
