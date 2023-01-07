alphabetPosition = (text) =>
  text
    .toLowerCase()
    .split("")
    .reduce((acc, el) => {
      const code = el.charCodeAt() - 96;
      return code >= 1 && code <= 26 ? `${acc} ${code}` : acc;
    }, "")
    .trim();
