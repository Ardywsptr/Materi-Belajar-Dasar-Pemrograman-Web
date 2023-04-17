// CONTOH FUNGSI SEDERHANA
function greating(){
    console.log('Selamat sore!');
}
greating(); //kode dalam blok fungsi akan hanya akan di eksekusi apabila fungsi nya dipanggil

//CONTOH FUNGSI DENGAN 1 PARAMETER
//berikut caranya agar fungsi greeting dapat menampilkan data yang dinamis
function greeting(greet){
    console.log('Selamat ' + greet + '!');
}
greeting('Pagi');
greeting('Malam');

//CONTOH FUNGSI DENGAN 2 PARAMETER
function greeting(greet, name){
    console.log('Selamat ' + greet + ', ' + name + '!');
}
greeting('Pagi', 'Ardy');
greeting('Malam', 'Cici');

//CONTOH FUNGSI DENGAN 2 PARAMETER DENGAN DEFAULT
function greeting(greet, name = "Bapak/Ibu") {
    console.log("Selamat " + greet + ", " + name + "!");
}
greeting("siang", "Dimas"); 
greeting("pagi");