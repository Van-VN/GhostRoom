function calcPrice(room) {
    var totalAmount = 0;
    for (var i = 0; i < room.length; i++) {
        for (var j = 0; j < room[i].length; j++) {
            if (room[i][j] === 0) {
                totalAmount -= room[i + 1][j];
            }
            else {
                totalAmount += room[i][j];
            }
        }
    }
    return totalAmount;
}
var matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
];
console.log(calcPrice(matrix));
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     // console.log(matrix[i][j]);
//     if (matrix[i][j] === 0) {
//       console.log(matrix[i + 1][j]);
//     }
//   }
//   //   console.log(matrix[i]);
// }
// console.log(matrix);
