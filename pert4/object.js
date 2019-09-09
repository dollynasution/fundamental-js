// object literal
const studentData = {
  name: 'Dolly',
  class: 'XII IPA 1',
  hobbies: [
    'Gaming',
    'Watching',
    'Travelling'
  ],
  score: 99,
  walk: function () {
    console.log('walk')
  }
}

// studentData.name = 'AlphaOneIsHere' - mengubah property di dalam suatu const, tidak memungkinkan untuk mengubah const
console.log(studentData.name)
console.log(studentData.class)
console.log(studentData.hobbies[2])
console.log(studentData.score)
studentData.walk()



