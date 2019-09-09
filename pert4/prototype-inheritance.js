// cara buat class pake function
function human (name, age) {
  this.name = name
  this.age = age
}

human.prototype.money = 5000
human.prototype.money -=1500

const human1 = new human('Dolly', 28)
human1.money = 3000
console.log(human1)
console.log(human1.money)

const human2 = new human('Alpha', 30)
console.log(human2.money)

// copy characteristic of human1
// const human3 = Object.assign({}, human1) - cara lama
const human3 = {...human1}
human3.name = 'Ucok'
console.log('human3', human3)
console.log('human1', human1)
