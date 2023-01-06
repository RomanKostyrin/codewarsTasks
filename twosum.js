function twoSum(numbers, target) {
  const map = {};
  numbers.forEach((number) => {
    map[number] = target - number;
  });
  const number = Object.values(map).filter((el) => map[el])[0];
  return [numbers.indexOf(number), numbers.lastIndexOf(map[number])];
}
