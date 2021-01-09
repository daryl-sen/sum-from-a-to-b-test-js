function sum(fromN, toN) {

  // recursive case
  if (fromN < toN -1) {
    return fromN + sum(fromN + 1, toN);
  } else if (fromN === toN) {
    return fromN;
  }

  // base case
  return fromN + toN;

}

// console.log(sum(3, 7));

module.exports = sum;

// 3, 7

// (3 + (4 + (5 + (6 + 7))))






