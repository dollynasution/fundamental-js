// buat class bernama Cat (kucing)

// memiliki 4 property
// 1. type (string)
// 2. furColor (string)
// 3. hasNails (boolean)
// 4. isAngry (boolean)

// kucing bisa makan
// 1. eat()
// 2. sleep()
// 3. becomeAngry()

class Cat {
  constructor(name, type, furColor) {
    this.name = name
    this.type = type
    this.furColor = furColor
    this.hasNails = true
    this.isAngry = false
  }
  
  eat() {
    console.log(`${this.name} is eating`)
  }
  sleep() {
    console.log(`${this.name} is sleeping`)
  }
  becomeAngry() {
    this.isAngry = true
    console.log(`${this.name} is angry`)
  }  
}

const felice = new Cat ('felice', 'persian', 'golden')
console.log(felice)
felice.becomeAngry()

console.log(`\n`)
// loopingn in object
for (prop in felice) {
  console.log(felice[prop])
}
