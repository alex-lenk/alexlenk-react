export function getNoun(number, oneWord, twoWord, fiveWord) {
  let nub = Math.abs(number);
  nub %= 100;

  if (nub >= 5 && nub <= 20) {
    return fiveWord;
  }

  nub %= 10;
  if (nub === 1) {
    return oneWord;
  }

  if (nub >= 2 && nub <= 4) {
    return twoWord;
  }

  return fiveWord;
}
