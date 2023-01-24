function towerBuilder(nFloors) {
  return Array(nFloors)
    .fill(" ")
    .reduce((acc, el, i) => {
      const gap = el.repeat(i);
      acc.unshift(`${gap}${"*".repeat(nFloors * 2 - i * 2 - 1)}${gap}`);
      return acc;
    }, []);
}
