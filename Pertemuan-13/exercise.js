// Mini Exercise
const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5));
