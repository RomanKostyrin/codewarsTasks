function comp(array1, array2) {
  if (array1?.length !== array2?.length) return false;
  array2.sort();
  let sorted1 = array1.map((el) => el ** 2).sort();

  for (let i = 0; i < array2.length; i++) {
    if (sorted1[i] !== array2[i]) return false;
  }
  return true;
}
