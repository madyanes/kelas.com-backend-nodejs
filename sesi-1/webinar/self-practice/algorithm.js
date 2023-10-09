/**
 * Algoritma Bonus Pulsa Rp. 25.000
 *
 * 1. Input total pembayaran
 * 2. Jika total belanja melebihi Rp 500.000, lanjut ke langkah berikutnya. Jika tidak, langsung ke langkah 5.
 * 3. Input nomor handphone
 * 4. Kirim pulsa Rp 25.000
 * 5. Tampilkan total belanja yang harus dibayar dan bonus jika ada
 */

const calc = (total, bonus, phone) => {
  let reward = null;
  let message = null;

  if (total >= 500000) {
    reward = bonus;
    message = `Total belanja: ${total} + bonus pulsa Rp${bonus} di nomor ${phone}`;
  } else {
    message = `Total belanja: ${total}`;
  }

  return message;
};

const result = calc(500000, 25000, '081122334455');
console.log(result);
