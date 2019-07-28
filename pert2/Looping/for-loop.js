// we use i for 'iteration'

for (let i = 1; i <= 20; i+= 2) {
  console.log(`${i + 1}. hello world`)
}

for (let i = 2; i <= 20; i+= 2) {
  console.log(`${i}`)
}

for (let i = 1; i <= 10; i+= 1) {
  console.log(`${i * 2}`)
}

// new line
console.log('\n\n\n\n')

// nested if
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log('nested if')
  }
}

console.log('\n)')

// loop drawing - bintang ke kanan
let stars = ''
for (let i = 0; i < 5; i++) {
  stars += '*'
}
console.log(stars)

// loop drawing - bintang ke bawah
let stars2 = ''
for (let i = 0; i < 5; i++) {
  stars2 += `*\n`
  console.log(stars2)
}

console.log('\n')

// loop drawing - bintang segitiga
let stars3 = ''
for (let i = 0; i < 5; i++) {
  stars3 += `*`
  console.log(stars3)
}

let triangle = ''
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    triangle += '*'
  }
  triangle += '\n'
}
console.log(triangle)

console.log('\n')
// loop drawing - bintang kotak
let stars4 = ''
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    stars4 += `*`
  }
  stars4 += `\n`
}
console.log(stars4)

console.log('\n')
// loop drawing - bintang segitiga terbalik
let stars5 = ''
for (let i = 0; i < 5; i ++) {
  for (let j = 5; j > i; j--) {
    stars5 += `*`
  }
  stars5 += '\n'
}
console.log(stars5)
