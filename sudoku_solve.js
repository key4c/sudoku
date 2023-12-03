const { sudokuGrid } = require('./grid.js')

// console.log(sudokuGrid)

const solveSudoku = function (board) {
  const size = 9
  const boxSize = 3

  // тут пишу рекурсивную функцию для проверки возможности подставить в поле какое-то число. Алгоритм Depth-first search DFS.

  const findEmpty = (board) => {
    for (let r = 0; r < size; i++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] == '-') {
          return [r, c]
        }
      }
    }
    return null
  }
  const solve = () => {
    //поиск первой незаполненной
    const currentPos = findEmpty(board)

    if (currentPos === null) {
      return true
    }
    return false
  }
  solve()
  return board
}
