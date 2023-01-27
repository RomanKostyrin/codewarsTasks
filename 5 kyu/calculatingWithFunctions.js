const zero = (fn) => (typeof fn === "function" ? fn(0) : 0);
const one = (fn) => (typeof fn === "function" ? fn(1) : 1);
const two = (fn) => (typeof fn === "function" ? fn(2) : 2);
const three = (fn) => (typeof fn === "function" ? fn(3) : 3);
const four = (fn) => (typeof fn === "function" ? fn(4) : 4);
const five = (fn) => (typeof fn === "function" ? fn(5) : 5);
const six = (fn) => (typeof fn === "function" ? fn(6) : 6);
const seven = (fn) => (typeof fn === "function" ? fn(7) : 7);
const eight = (fn) => (typeof fn === "function" ? fn(8) : 8);
const nine = (fn) => (typeof fn === "function" ? fn(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => a * b;
const dividedBy = (a) => (b) => Math.floor(b / a);
