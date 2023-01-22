var isValid = function (s) {
  const map = { "(": ")", "[": "]", "{": "}" };
  const storage = s.split("").reduce((acc, el) => {
    map[acc[acc.length - 1]] === el ? acc.pop(el) : acc.push(el);
    return acc;
  }, []);
  return !storage.length;
};
