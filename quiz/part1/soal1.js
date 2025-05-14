// SOAL 1

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
// buat 2 variabel yaitu nama dan peran
// variabel peran harus memiliki isi data
// jika nama kosong, pemain diberikan peringatan "nama wajib diisi"
// jika peran kosong pemain diberikan peringatan berupa "Pilih Peranmu untuk memulai game (Ksatria, Tabib, Penyihir)"
// ada 3 peran yaitu Ksatria, Tabib, dan Penyihir
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// jika peran = "Ksatria" keluar respon halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// jika peran = "Tabib" keluar respon halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// jika peran = "Penyihir" keluar respon halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// jika peran tidak ada keluar respon tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada


let nama = "Rapael", peran = "Ksatria";

//code disini gunakan console.log untuk outputnya

if (nama === "") {
    console.log("nama wajib diisi");
} else if (peran === "" ){
    console.log("Pilih Peranmu untuk memulai game (Ksatria, Tabib, Penyihir)");
} else {
    switch (peran) {
        case "Ksatria":
            console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
            break;
        case "Tabib":
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
            break;
        case "Penyihir":
            console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
        default:
            console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
}