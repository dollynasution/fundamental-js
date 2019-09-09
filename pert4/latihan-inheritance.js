class shape{
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  getArea() {
    return null;
  }

  getPerimeter() {
    return null;
  }
}

class rectangle extends shape {
  constructor (length, width) {
    super (length, width)
  }

  get Area() {
    return this.length * this.width
  }

  get Perimeter() {
    return 2 * (this.length + this.width)
  }

  set panjang(value) {
    this.length = value
    console.log('panjang diubah')
  }

  // method yang biasa digunakan tanpa membuat object dari sebuah class
  static describe() {
    console.log('ini adalah sebuah kotak')
  }
}

const persegi = new rectangle (30, 40)
persegi.panjang = 10
console.log(persegi.Area)
console.log(persegi.Perimeter)

rectangle.describe()
