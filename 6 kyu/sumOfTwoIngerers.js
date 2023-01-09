function add(x, y) {
  let carry = 0;
  while (x !== 0) {
    carry = x & y;
    y = x ^ y;
    x = carry << 1;
  }
  return y;
}
