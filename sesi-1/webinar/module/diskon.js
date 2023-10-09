/*
    #Algoritma hitung diskon
    1. Masukkan total belanjaan dari pembeli
    2. Jika total belanjaan lebih besar atau sama dengan 300.000
    maka lanjut hitung diskon atau masuk kelangkah ke 3
    jika tidak maka lanjut ke langkah 5.
    3. Hitung diskon 10% dari total belanjaan.
    4. kurangi total belanja dengan jumlah diskon yang didapatkan
    5. tampilkan total belanja yang harus di bayarkan oleh pembeli
*/


const totalPayment = function(totalBelanja){
    let diskon = 0;
    let totalBayar = totalBelanja;

    if (totalBelanja >= 300) {
        diskon = 0.1 * totalBelanja;

        totalBayar = totalBelanja - diskon;
    }

    return totalBayar;
}

let totalBelanja = 350000
let result = totalPayment(totalBelanja);

console.log(`Total belanja Rp.${totalBelanja.toLocaleString()}`);
console.log(`yang harus dibayar Rp. ${result.toLocaleString()}`);