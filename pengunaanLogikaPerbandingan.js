//PENGUNAAN PERBANDINGAN DENGAN KONDISI TRUE
// let computerScore = 90;
// let myScore = 120;

// if(myScore > computerScore){
//     console.log('selamat anda menang');
// }else{
//     console.log('anda kalah')
// }



//PENGGUNAAN PERBANDINGAN DENGAN KONDISI FALSE
// let nilaiUts = 80;
// let nilaiUas = 75;

// if(nilaiUas > nilaiUts){
//     console.log('selamat anda naik kelas');
// }else{
//     console.log('anda tidak naik kelas');
// }



//PENGGUNAAN PERBANDINGAN LEBIH DARI 2 KONDISI
// const score = 83;

// if(score > 89){
//     console.log('Selamat anda mendapatkan peringkat A!');
// }else if(score > 79){
//     console.log('Selamat anda mendapatkan peringkat B!');
// }else if(score > 69){
//     console.log('Selamat anda mendapatkan peringkat C!');
// }else{
//     console.log('Anda tidak mendapatkan peringkat!');
// }



//PENGGUNAAN PERBANDINGAN DENGAN OPERATOR LOGIKA 
//hal yang menjadi sedikit menantang adalah membedakan antara “sama” (==) dan “identik” (===).
// Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.
// Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.
//contoh :
// const aString = '10';
// const aNumber = 10;

// console.log(aString == aNumber); //  true, karena nilainya sama-sama 10
// console.log(aNumber === aString); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
// //dalam artian == merupakan perbandingan dengan cara membandingkan nilai nya apakah sama atau tidak (number 10 sama dengan string '10')
// //dalam artian === merupakan membandingkan secara identik dengan melihat tipe data nya



//PENGGUNAAN LOGIKA PERBANDINGAN DENGAN 'AND (&&)' 'OR(||)'
//syarat : kedua kondisi harus bernilai true supaya mendapatkan hasil yang true, jika salah satu saja ada yang false maka hasil nya akan false
//contoh hasil yang true
// let nilaiTugas = 80;
// let nilaiUjian = 90;

// if(nilaiTugas > 75 && nilaiUjian > 80){
//     console.log('Selamat anda lulus');
// }else {
//     console.log('Maaf, Anda belum lulus');
// }//hasil nya lulus karena dua kondisi terpenuhi

// //contoh hasil yang false 
// let totalBelanja = 125000;
// let jenisMember = 'Bronze'

// if(totalBelanja > 100000 && jenisMember == 'Silver'){
//     console.log('Selamat anda mendapatkan diskon!');
// }else{
//     console.log('Anda tidak mendapatkan diskon');
// } //hasil nya tidak mendapatkan diskon karena ada salah satu kondisi yang false yaitu jenis member nya



//PENGGUNAAN LOGIKA PERBANDINGAN DENGAN 'OR(||)'
//syarat : salah satu kondisi harus bernilai true supaya mendapatkan hasil yang true, jika kedua kondisi nya false maka hasil nya akan false

//contoh hasil yang true
// let kecepatanMax = 100;
// let cc = 100;

// if(kecepatanMax > 90 || cc > 125){//salah satu kondisi terpenuhi yaitu kecepatanMax
//     console.log('Motor anda melampaui kecepatan maksimal motor pada umumnya');
// }else {
//     console.log('Motor anda sama seperti motor pada umunya');
// }//hasil nya melampaui motor pada umunya

//contoh hasil yang false
let totalHarga = 20000;
let memberAkun = 'Silver';

if(totalHarga > 50000 || memberAkun == 'Gold'){//salah satu kondisi terpenuhi yaitu memberAkun
    console.log('Anda mendapatkan gratis ongkir');
}else {
    console.log('Anda tidak mendapatkan gratis ongkir');
}//hasil nya tidak mendapat gratis ongkir