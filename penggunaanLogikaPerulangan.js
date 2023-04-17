//PENGGUNAAN LOGIKA PERULANGAN MENGGUNAKAN FOR
for(let i=0; i<5; i++){ 
    console.log('Hello word!');
}
console.log('sudah diluar kondisi for');
//for(deklarasi/inisialisasi variabel; kondisi variabel; statement untuk perulangan)
//let i=0 -> variabel i yang diinisialisasi dengan nilai awal 0 atau bisa disebut titik awal dari perulangan.
//i<5 -> kondisi perulangan variabel i harus kurang dari 5     
//i++ atau i=i+1 -> nilainya selalu bertambah 1 setiap sebuah kondisi terpenuhi

//PENGGUNAAN LOGIKA PERULANGAN MENGGUNAKAN WHILE
// Apa perbedaannya dengan for? Biasanya while digunakan ketika kita tidak tahu berapa kali perulangan akan berjalan. Karena dalam while, asalkan kondisinya memenuhi syarat atau bernilai true, maka perulangan akan terus dilakukan. Sedangkan dalam For, nilai perulangan, jumlah perulangan, dan akhiran yang biasanya berupa statement telah kita tentukan.
let counter = 0;

while(counter < 5){
    console.log('Hello word!');
    counter++;
}
console.log('sudah diluat kondisi while');