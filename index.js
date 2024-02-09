// let numbers = [5, 525, 45, 36, 89, 74, 10, 15, 289, 65];
// let min = numbers[0];
// let max = numbers[0];
// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(min);
// console.log(max);

/* task2 */

// let chisla = [];
// let sum = 0;
// for (i = 0; i < 5; i++) {
//   let num = +prompt("vvedite chislo");
//   chisla.push(num);
//   sum += num;
// }
// console.log(chisla);
// console.log(`summa chisel ravna => ${sum}`);
// console.log(`srednee znacheniye ravna => ${sum / 5}`);

/* task2/2 */
// let chisla = [];
// let sum = 0;
// let i = 0;
// while (i < 5) {
//   let num = +prompt("Vvedite chislo");
//   chisla.push(num);
//   i++;
// }
// j = 0;
// while (j <= chisla.length) {
//   sum += chisla[j];
//   j++;
// }
// console.log(chisla);
// console.log(`summa chisel ravna => ${sum}`);
// console.log(`srednee znacheniye ravna => ${sum / 5}`);
/* task3 */
// let arr1 = [2, 4, 5, 3, 7, 8, 9];
// let arr2 = [1, 12, 15, 5, 4, 9, 36];
// for (i = 0; i < 7; i++) {
//   if (arr1[i] > arr2[i]) {
//     console.log(`Element s indeksom${i}=>${arr1[i]} bolshe chem ${arr2[i]}`);
//   } else if (arr1[i] < arr2[i]) {
//     console.log(`Elemnt s indeksom ${i}=>${arr1[i]} menshe chem ${arr2[i]}`);
//   } else {
//     console.log(`Element s indekson ${i}=>${arr1} ravno ${arr2}`);
//   }
// }
/* task4 */
// let arr10 = [2, 5, 4, 9, 8, 7, 65, 74, 89, 10];
// let even = [];
// let odd = [];
// for (i = 0; i < arr10.length; i++) {
//   if (arr10[i] % 2 === 0) {
//     even.push(arr10[i]);
//   }
//   if (arr10[i] % 2 !== 0) {
//     odd.push(arr10[i]);
//   }
// }
// console.log(even);
// console.log(odd);

// /* task5 */
class Shop {
  constructor() {
    this.userbag = [];
    this.fruits = ["apple", "banana", "orange"];
    this.vegetables = ["cabage", "onion", "potato"];
  }
  buyFruits(id) {
    if (id >= 0 && id <= 2) {
      this.userbag.push(this.fruits[id]);
    }
  }
  buyVegetables(id) {
    if (id >= 0 && id <= 2) {
      this.userbag.push(this.vegetables[id]);
    }
  }
  getuserBag() {
    return this.userbag;
  }
}

let user1 = new Shop();

while (true) {
  let ask = +prompt("Viberite:\n1.fruits\n2.vegetables\n3.exit");
  if (ask == 3) {
    alert(user1.getuserBag());
    break;
  } else if (ask == 1) {
    user1.buyFruits(+prompt("1.apple 2.banana 3.orange") - 1);
  } else if (ask == 2) {
    user1.buyVegetables(+prompt("1.cabage 2.onion 3.potato") - 1);
  }
}
