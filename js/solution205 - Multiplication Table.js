// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = (size) => {
  const table = []

  for (let i = 1; i <= size; i++) {
    const row = []

    for (let j = 1; j <= size; j++) {
      row.push(i * j)
    }

    table.push(row)
  }

  return table
}
