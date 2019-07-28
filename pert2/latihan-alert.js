const massa = prompt('Masukkan Berat Anda')
const tinggi = prompt('Masukkan Tinggi Anda')
var IMT = massa/Math.pow(tinggi, 2)

if(IMT < 18.5) {
  alert('Berat badan kurang')
} else if (IMT >= 18.5 && IMT <= 24,9) {
  alert('Berat badan ideal')
} else if (IMT >= 25 && IMT <= 29,9) {
  alert('Berat badan berlebih')
} else if (IMT >= 30 && IMT <= 39,9) {
  alert('Berat badan sangat berlebih')
} else {
  alert('OBESITAS')
}
