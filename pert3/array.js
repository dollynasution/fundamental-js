const students = ['Budi', 'Ani', 'Yanto', 'Dolly', 'Herman', 'Chandra']
const carBrands = [
  `Suzuki`, 
  `Honda`, 
  `Mercedez`, 
  `Jaguar`, 
  `Toyota`, 
  `Opel`
]

const mixed = [
  'Kalimat',
  345,
  89,
  'Buku tulis',
  function () {
    console.log('wkwkwkwk land')
  },
  'hehe'
]

// console log array
console.log(carBrands)

// jumlah member dalam sebuah array
console.log(students.length)

// ubah dari array ke string
console.log(students.toString())

// ubah dari array ke string (custom)
console.log(students.join(' - '))

// console log per value
console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[7])

console.log('/n')
// push - menambahkan baru dalam list di urutan terakhir
students.push('Beta')
console.log(students)
// pop - mengeluarkan objek dalam list yang berada pada posisi akhir list
students.pop()
console.log(students)

console.log('/n')
// unshift - menambahkan baru dalam list di urutan pertama
students.unshift('Beta')
console.log(students)
// shift - mengeluarkan objek dalam list yang berada pada posisi akhir list
students.shift()
console.log(students)

const fruits = ['watermelon', 'pineapple', 'kiwi']
// splice (index, amountToBeDeleted, ...replacing elements otherwise deleted)
fruits.splice(0, 1, 'papaya', 'blackcurrant')
console.log(fruits)

const numbers = [1, 2, 3, 4, 5]
const colors = ['red', 'blue', 'green', 'black']
console.log(numbers.slice(1, 3))
console.log(numbers.slice(1, 4))
console.log(numbers.slice(3))

// cara lama
// const numbersAndColors = numbers.concat(colors)

// cara baru (ES6)
const numbersAndColors = [...colors, ...numbers, 'AlphaOneCopy']
console.log(numbersAndColors)