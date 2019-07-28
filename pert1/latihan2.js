let hari = 512
const tahun = Math.floor(hari / 365)
hari %= 365
const bulan = Math.floor(hari / 30)
hari %= 30
const minggu = Math.floor(hari / 7)
hari %= 7

console.log(`${tahun} tahun ${bulan} bulan ${minggu} minggu ${hari} hari`)