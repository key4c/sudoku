function stringToGrid(inputString) {
  let grid = []
  let index = 0

  for (let i = 0; i < 9; i++) {
    let row = []
    for (let j = 0; j < 9; j++) {
      let value = inputString[index]
      index++
      row.push(value)
    }
    grid.push(row)
  }

  return grid
}

let inputString =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let sudokuGrid = stringToGrid(inputString)

module.exports = { sudokuGrid }
