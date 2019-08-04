// function statement
// function statement pada runrime akan dinaikkan ke atas
// sehingga aman digunakan bahan sebelum deklarasi
// istilah ini disebut "hoisting"

function greet() {
  const name = 'Dolly'
  console.log(`Ohayou Sekai Good Morning World, ${name}`)
}

function alertUser() {
  console.log('Error detected')
}

greet()
alertUser()

// function expression
// function expression harus dideklarasi dulu baru bisa digunakan

const alpha = function () {
  console.log('beta')
}

alpha()

// function parameter
function sapa(panggilan) {
  console.log(`Hello, ${panggilan}`)
}

sapa('Dolly')
sapa('Alpha')
sapa('Bonar')

// function with default parameter
function beta(coba = 'bodat') {
  console.log(`Hello, ${coba}`)
}

beta('Delta')
beta()

// function return value
// contoh ini akan menghasilkan undefined
const eat = function(foodName) {
  console.log(`I want some ${foodName}`)
}

const hasilFunction = eat('satay')
console.log(hasilFunction)

//contoh ini mengembalikan nilai tertentu sesuai setting awal
const getSpecialNumber = function() {
  return 10
}

const number = getSpecialNumber()
console.log(number)
console.log(number * 5)
console.log(Math.pow(number, 3))

// 5000 = 5 detik, satuan dalam milli second, menentukan waktu delay
setTimeout(function(){
  console.log(`you've been waiting for 3 seconds`)
},3000)

const interval = setInterval(function(){
  console.log('1 detik telah berlalu')
}, 1000)

function stop() {
  clearInterval(interval)
}
setTimeout(stop, 3100)