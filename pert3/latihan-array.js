let carBrands = [
  `Suzuki`, 
  `Honda`, 
  `Mercedez`, 
  `Jaguar`, 
  `Toyota`, 
  `Opel`
]

// ambil index member dalam suatu array - hasil negatif 1 jika tidak ada di dalam list
console.log(carBrands.indexOf('Jaguar'))

carBrands[9] = 'Mini'
// sort dari kecil ke besar
carBrands.sort()
// sort dari besar ke kecil
carBrands.sort(function (a, b) {
  return a < b
})

for (let i = 0; i < carBrands.length; i++) {
  console.log(`${i + 1}. ` + carBrands[i])
}

console.log('\n')

// looping dengan forEach
carBrands.forEach(function (carBrand, index) {
  console.log(`${index + 1}. ${carBrand}`)
})