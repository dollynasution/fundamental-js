class Student {
  constructor(name, age, nationality) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  // function dalam class disebut sebagai method
  study () {
    console.log(`${this.name} is studying`)
  }
}

const dolly = new Student('Dolly', 28, 'Indonesia')
const herman = new Student('Herman', 25, 'Indonesia')
const hendra = new Student('Hendra', 24, 'Indonesia')

console.log(dolly)
console.log(herman)
console.log(hendra)
dolly.study()
herman.study()