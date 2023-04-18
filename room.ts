function calcPrice(room: number[][]) {
  let totalAmount: number = 0;
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (i < room.length - 1 && room[i][j] === 0) {
        totalAmount -= room[i + 1][j];
      } else {
        totalAmount += room[i][j];
      }
    }
  }
  return totalAmount;
}

let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(calcPrice(matrix));
