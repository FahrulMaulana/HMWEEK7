const persegipanjang = require('./persegipanjang');
const persegi = require('./persegi');

const panjang = 10;
const lebar = 3;
const sisi = 4;

const luasPersegi = persegi.luas(sisi);
const kelilingPersegi = persegi.keliling(sisi);

console.log(`Luas persegi: ${luasPersegi}`);
console.log(`Keliling persegi: ${kelilingPersegi}`);

const luasPersegiPanjang = persegipanjang.luas(panjang, lebar);
const kelilingPersegiPanjang = persegipanjang.keliling(panjang, lebar);

console.log(`Luas persegi panjang: ${luasPersegiPanjang}`);
console.log(`Keliling persegi panjang: ${kelilingPersegiPanjang}`);

