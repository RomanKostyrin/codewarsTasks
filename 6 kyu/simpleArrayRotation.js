function solve(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  const middle = arr[Math.floor(arr.length / 2)];
  if (first >= middle && middle >= last) return "D";
  if (first <= middle && middle <= last) return "A";
  return first >= last ? "RA" : "RD";
}
