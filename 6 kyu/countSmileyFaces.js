function countSmileys(arr) {
  const eyes = { ":": true, ";": true };
  const noses = { "-": true, "~": true };
  const lips = { ")": true, D: true };
  return arr.reduce((smiles, smile) => {
    if (smile.length > 3) return smiles;
    const common = eyes[smile[0]] && lips[smile[smile.length - 1]];
    const isSmile = smile.length === 2 ? common : common && noses[smile[1]];
    return isSmile ? ++smiles : smiles;
  }, 0);
}
