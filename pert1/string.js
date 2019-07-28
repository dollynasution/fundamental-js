const sentence = 'Semua terserah padamu aku begini adanya'

// menunjukkan panjang string
console.log(sentence.length)

// ambil posisi index sebuah substring (index mulai dari 0)
console.log(sentence.indexOf('padamu'))

// ambil substring dari index x ke x
console.log(sentence.substring(0, 20))

// gabungan substring dan indexof
const kalimatbaru = sentence.substring(sentence.indexOf('terserah'), sentence.length)
console.log(kalimatbaru)

// slice string - mirip dengan substring
console.log(sentence.slice(6,10))

// includes - return boolean
console.log(sentence.includes('bodat'))

// split (mengubah string menjadi array)
console.log(sentence.split(' '))

// toUpperCase - mengubah menjadi huruf capital
console.log(sentence.toUpperCase())

// toLowerCase - mengubah menjadi huruf kecil
console.log(sentence.toLowerCase())

// mengubah integer ke string
const angka = 4e3

// angka.toString() tidak terlalu berguna di javascript, sebab saat string + number = string
console.log('Jawabannya adalah '+ angka)

// mengubah string ke integer
const number = '21000'
console.log(parseInt(number))

const x = '123'
const y = '456'
const xInt = parseInt(x)
const yInt = parseInt(y)
const result = (xInt + yInt).toString()
console.log(result)