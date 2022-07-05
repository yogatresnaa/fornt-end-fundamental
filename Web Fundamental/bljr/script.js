// //  Var merupakan variabel kontroversial =  jgn d pake lagi
// // function makeTea(isCold) {
// //   if (isCold) {
// //     tea = "Make an Ice Tea!";
// //   } else {
// //     tea = "Make a Hot Tea!";
// //   }
// //   return tea;
// // }

// // console.log(makeTea(false));

// // ========================

// // menggunakan let, nilai masih bisa d rubah
// // let buah = "Apel";
// // buah = "duren";
// // console.log(buah);
// // bisa

// // menggunakan const, nilai ga bisa d rubah
// // const orang = "manusia";
// // orang = "utan";
// // console.log(orang);
// // error

// // =============================================

// // templet literal atau string literal

// // const user = {
// //   firstName: "Dimas",
// //   lastName: "Saputra",
// //   age: 18,
// // };

// // console.log(`Nama : ${user.firstName} ${user.lastName} Umur : ${user.age}`);

// // destructuring object

// const user = {
//   age: 18,
//   firstName: "Dimas",
//   lastName: "Saputra",
// };

// const { firstName, lastName, age } = user;
// console.log(lastName, firstName, age);
// // ===========================================

// // destructuring Assigment
// // const user1 = {
// //   NameDepan: "ulan",
// //   nameBelakang: "prayoga",
// //   umur: 18,
// // };

// // let NameDepan = "yanto";
// // let umur = 20;

// // ({ NameDepan, umur } = user1);
// // console.log(NameDepan);
// // console.log(umur);

// // Destructuring Array

// const favorites = ["seafuud", "salad", "nuget", "soup"];

// const [fourthFood, firstFood, secondFood, thirdFood] = favorites;
// console.log(secondFood, firstFood, fourthFood);

// // ===============================================

// const favorites2 = ["seafuud", "salad", "nuget", "soup"];

// const [, , , thirdFood1] = favorites2;
// console.log(thirdFood1);

// const makanan = ["pecel", "rujak", "ayamBakar", "sop Betawi"];

// //
// // Destructing Assegment
// let myMenu = "nasi Uduk";
// let cemilanKu = "rengginang";

// [myMenu, cemilanKu] = makanan;

// console.log(`Makanan Favorit saya sebenarnya ${myMenu} dan cemilan saya ${cemilanKu}`);

// let a = 1;
// let b = 2;

// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// [a, b] = [b, a];

// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// // Spred operator

// const buahFavorit = ["apel", "Melon", "alpuket"];
// const buahLainnya = ["jeruk", "pear", "paya", "buah naga"];

// const allBuah = [...buahFavorit, "JAMBU", ...buahLainnya];

// console.log(allBuah);

// // rest parameter

// const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

// const [weight, manufacture, door, ...items] = refrigerator;

// console.log(manufacture);
// console.log(weight);
// console.log(door);
// console.log(items);

// // function declaration
// // function sayHello(greet) {
// //     console.log(`${greet}!`);
// // }

// // function expression
// // const sayName = function (name) {
// //     console.log(`Nama saya ${name}`)
// // }

// const hitung = (nilai1, nilai2) => {
//   return nilai1 * nilai2;
// };
// const hasil = hitung(20, 10);
// console.log(hasil);

// class vehicel {
//   constructor(licencePlate, manufacture) {
//     this.licencePlate = licencePlate;
//     this.manufacture = manufacture;
//     this.engineActive = false;
//   }

//   startEngines() {
//     console.log(`mesin kendaraan ${this.licencePlate} dinyalakan`);
//   }

//   info() {
//     console.log(`Nomor Kendaraan: ${this.licensePlate}`);
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
//   }
//   parking() {
//     console.log(`Kendaraan ${this.licensePlate} parkir!`);
//   }
// }

// class Car extends vehicel {
//   constructor(licencePlate, manufacture, wheels) {
//     super(licencePlate, manufacture);
//     this.wheels = wheels;
//   }
//   droveOff() {
//     console.log(`kendaraan ${this.licencePlate} Melaju`);
//   }
//   openDoor() {
//     console.log(`Membuka pintu!`);
//   }
// }

// const mubil = new Car("XSE1213", "Odong-odong", 6);
// mubil.startEngines();
// mubil.droveOff();

// console.log("satu");
// setTimeout(() => {
//   console.log("dua");
// }, 5000);
// console.log("tiga");

// ==================================
// const getCake = (callback) => {
//   let cake = null;
//   console.log("Sedang membuat kue, silakan tunggu ....");
//   setTimeout(() => {
//     cake = "kue jadi";
//     callback(cake);
//     // console.log("kue jadi ....");
//   }, 3000);
//   console.log("tungguin dikitn lagi ....");
//   return cake;
// };

// getCake((cake) => console.log(cake));

// ============================

const executorFunction = new Promise((resolve, reject) => {
  const isCoffeeMakerReady = false;
  if (isCoffeeMakerReady) {
    setTimeout(() => {
      resolve("kopi lw nh dah jadi");
    }, 1000);
    console.log("tunggu bentar ya");
  } else {
    setTimeout(() => {
      reject("mesin kopi rusaakk");
    }, 2000);
    console.log("tunggu bentar ya");
  }
});
const sip = executorFunction;
sip.then((resolvedResponse) => console.log(`OK! : ${resolvedResponse}`)).catch((reajectResponse) => console.log(`Haduuh : ${reajectResponse}`));
// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then((response) => console.log(`SIP! : ${response}`)).catch((response) => console.log(`GA SIP!: ${response}`));
module.exports = sip;
