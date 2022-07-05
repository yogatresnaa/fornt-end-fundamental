// const methodeMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi + 2;
//     console.log(`Selamat Makan ${this.nama}`);
//   },
//   Belajar: function (ngoding) {
//     this.energi -= ngoding;
//     console.log(`Hai ${this.nama} saatnya kamu Belajar ya`);
//   },
// };

// function Mahasiswa(nama, nim, kelas, energi) {
//   let mahasiswa = Object.create(methodeMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.nim = nim;
//   mahasiswa.kelas = kelas;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let mhs1 = Mahasiswa("M.Puji Tresna Prayoga", 181011402733, "08TPLM007", 10);
// console.log(mhs1);
// console.log(mhs1.Belajar(3));
// console.log(mhs1);

// function Mahasiswa(nama, nim, kelas, energi) {
//   // let this = Object.create(Mahasiswa.prototype) . dibelakang layar ini yg terjadi
//   this.nama = nama;
//   this.nim = nim;
//   this.kelas = kelas;
//   this.energi = energi;

//   //   return this; . dibalik layar ini dibuat
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Selamat Makan ${this.nama}`);
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam;
//   console.log(`Selamat Makan ${this.nama}`);
// };

// let mhs1 = new Mahasiswa("M.Puji Tresna Prayoga", 181011402733, "08TPLM007", 10);
// console.log(mhs1);
// console.log(mhs1.makan(4));
// console.log(mhs1);

class MahaSiswa {
  constructor(nama, nim, kelas, energi) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    console.log(`Selamat Makan ${this.nama}, dengan ini energi kamu akan bertambah`);
  }
  belajar(jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama} selamat Belajar, Tidak apa2 energi kamu berkurang`);
  }

  tidur(istirahat) {
    this.energi += istirahat;
    console.log(`selamat istirahat ${this.nama}, Nanti pagi staminamu akan bertambah`);
  }
}

let mhs1 = new MahaSiswa("M. Puji Tresna Prayoga", 181011402733, "08TPLM007", 10);
console.log(mhs1);
console.log(mhs1.makan(3));
console.log(mhs1);
console.log(mhs1.belajar(4));
console.log(mhs1);
console.log(mhs1.tidur(6));
console.log(mhs1);
