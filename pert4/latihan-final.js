class Classroom {
  constructor() {
    this.students = []
  }

  // cara 1
  addStudents(students) {
    this.students = [...this.students, ...students]

    // cara 2
  // for (let i = 0; i < students.length; i++) {
    // this.students.push(students[i])
  // }
  }
}

const classroom = new Classroom()
const arr1 = ['hendri', 'heni', 'sofyan']
const arr2 = ['andi', 'ani', 'hendra']
classroom.addStudents(arr1)
classroom.addStudents(arr2)

console.log(classroom.students)


console.log('\n\n')

const arr3 = [1, 2, 3, 4, 5]

const reverseArray = function (array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i])
  }
  return newArray
}

console.log(reverseArray(arr3))