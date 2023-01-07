function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .reduce((acc, el) => Math.pow(el, value.toString().length) + acc, 0) ===
    value
  );
}
