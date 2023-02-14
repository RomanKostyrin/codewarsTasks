function expandedForm(num) {
  const str = num.toString();
  const result = str.split("").map((el, i) => {
    const zeros = "0".repeat(str.length - i - 1);
    return +(el + zeros) || "";
  });
  return result.filter(Boolean).join(" + ");
}
