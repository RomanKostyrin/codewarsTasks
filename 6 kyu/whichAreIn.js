function inArray(array1, array2) {
  return array1
    .reduce((result, el) => {
      for (let i = 0; i < array2.length; i++) {
        if (array2[i].includes(el)) {
          result.push(el);
          return result;
        }
      }
      return result;
    }, [])
    .sort();
}
