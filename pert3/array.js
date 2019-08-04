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