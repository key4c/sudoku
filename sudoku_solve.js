const { sudokuGrid } = require('./grid.js')

// console.log(sudokuGrid)

const solveSudoku = function (board) {
  const size = 9
  const boxSize = 3

  // тут пишу рекурсивную функцию для проверки возможности подставить в поле какое-то число. Алгоритм Depth-first search DFS.

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] == '-') {
          return [r, c]
        }
      }
    }
    return null
  }

  // проверка валеидности числа
  const validate = (num, pos, board) => {
    const [r, c] = pos // получаем строку и столбец деструктуризацией

    for (let i = 0; i < size; i++) {
      if (board[i][c] == num && i != r) return false
    }
    for (let i = 0; i < size; i++) {
      if (board[r][i] == num && i != c) return false
    }
    // проверка валеидности числа
    const boxRow = Math.floor(r / boxSize) * boxSize
    const boxCol = Math.floor(c / boxSize) * boxSize
    for (let i = boxRow; i < boxSize; i++) {
      for (let j = boxCol; j < boxCol; j++) {
        if (board[i][j] === num && i != r && j != c) {
          return false
        }
      }
    }
    return true
  }
  const solve = () => {
    //поиск первой незаполненной
    const currentPos = findEmpty(board)

    if (currentPos === null) {
      return true
    }
    console.log('-------------------------------------')
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString()
      const isValid = validate(currNum, currentPos, board)
      console.log(currentPos, currNum, isValid)

      if (isValid) {
        const [x, y] = currentPos
        board[x][y] = currNum

        //проверка на возможность решения всей доски после присвоения currNum рекурсивная функция для всего оставшегося борда.
        if (solve()) {
          return true
        }
        board[x][y] = '-'
      }
    }

    return false
  }
  solve()
  return board
}

console.table(sudokuGrid)
console.table(solveSudoku(sudokuGrid))
