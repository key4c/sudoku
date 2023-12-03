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

    // проверка валеидности числа
    const validate = (num, pos, board) => {
      const [r, c] = pos // получаем строку и столбец деструктуризацией

      for (let i = 0; i < size; i++) {
        if (board[i][c] == num && i != r) return false
      }
      for (let i = 0; i < size; i++) {
        if (board[r][i] == num && i != c) return false
      }
    }
  }
  const solve = () => {
    //поиск первой незаполненной
    const currentPos = findEmpty(board)

    if (currentPos === null) {
      return true
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString()
      const isValid = validate(currNum, currentPos, board)
    }

    return false
  }
  solve()
  return board
}
