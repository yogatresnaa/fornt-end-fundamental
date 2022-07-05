// PROMISE BERANTAI

// const state = {
//   isCoffeeMakeReady: true,
//   seedStocks: {
//     arabica: 250,
//     robusta: 60,
//     liberica: 80,
//   },
// };

// const getSeeds = (type, miligrams) => {
//   return new Promise((resolve, reject) => {
//     if (state.seedStocks[type] >= miligrams) {
//       state.seedStocks[type] -= miligrams;
//       resolve("biji Kopi didapatkan!");
//     } else {
//       reject("Maaf stock kopi habis!");
//     }
//   });
// };

// const makeCoffee = (seeds) => {
//   return new Promise((resolve, reject) => {
//     if (state.isCoffeeMakeReady) {
//       resolve("Kopi berhasil dibuat!");
//     } else {
//       reject("Maaf mesin tidak dapat digunakan!");
//     }
//   });
// };

// const servingToTable = (coffee) => {
//   return new Promise((resolve) => {
//     resolve("Pesanan kopi sudah selesai!");
//   });
// };

// function reserveACoffee(type, miligrams) {
//   getSeeds(type, miligrams)
//     .then(makeCoffee)
//     .then(servingToTable)
//     .then((resolvedValue) => {
//       console.log(resolvedValue);
//     })
//     .catch((rejectedReason) => {
//       console.log(rejectedReason);
//     });
// }

// reserveACoffee("luak", 20);

// ===========================================

// Promise All / menjalankan promise semua sekaligus

// const arabicaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi arabika selesai!");
//     }, 4000);
//   });
// };

// const robustaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi robusta selesai!");
//     }, 2000);
//   });
// };

// const libericaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi liberica selesai!");
//     }, 3000);
//   });
// };

// const promise = [arabicaOrder(), "------", robustaOrder(), "------", libericaOrder()];

// Promise.all(promise).then((nilaiResolve) => console.log(nilaiResolve));

// ==================================================

const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 10;
    setTimeout(() => {
      if (seeds >= 11) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

// dengan cara .then()
function makeCoffee() {
  getCoffee()
    .then((jadiCopy) => console.log(jadiCopy))
    .catch((kopiGaJadi) => console.log(kopiGaJadi));
}

// ===================================

// menggunakan async awati, jgn lupa tulis try -catch
// async function makeCoffee() {
//   try {
//     const coffee = await getCoffee();
//     console.log(coffee);
//   } catch (batal) {
//     console.log(batal);
//   }
// }

const kopiSiapDah = true;
const jadiKopi = makeCoffee();
// console.log(jadiKopi);

module.exports = { jadiKopi, kopiSiapDah };
