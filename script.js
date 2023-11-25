//50-masala
// let yosh = prompt("Yoshingizni kiriting.")
// let otaOna = prompt("Ota onangiz bilan birgamisiz?")
// if (yosh > 15 && otaona == "ha"){
//   alert("True")
// }else{
//   alert("False")
// }

//51-masala
// let a = "";
// let array = a.split("");
// for (let i = 0; i < 5; i++) {
//   a = prompt("son kiriting");
//   console.log(+a + 1);
// }

//52-masala
// let ism = prompt("Ismingizni kiriting");
// let familya = prompt("familiyangizni kiriting");
// console.log(`${ism} ${familya}`);

//53-masala
//bu mavzu manga begona

//54-masala
// let sozUzunligi = prompt("istalgan so'zni kiriting:");

// let length = sozUzunligi.length;
// if (+length % 2 == 0) {
//   alert("true");
// } else {
//   alert("false");
// }

//55-masala
// let son1 = +prompt("Son1 ni kiriting");
// let son2 = +prompt("Son2 ni kiriting");
// function daraja(x, y) {
//   let javob = x ** y;
//   return javob;
// }
// alert(daraja(son1, son2));

//56-masala
// let arr = "";
// let a = arr.split();
// for (let i = 0; i < 4; i++) {
//   a = prompt("nimadur kiriting");
// }    
// alert(a[a.length - 1]);

//57-masala
// let a = prompt("Qaysi yil?");
// if (a / 4) {
//   alert("true");
// } else if (a / 100) {
//   if (a / 400) {
//     alert("true");
//   }
// } else {
//   alert("false");
// }

//58-masala
// let soz = prompt("biron soz kiriting");
// let arr = soz.split("");
// arr.shift(arr[0]);
// soz = arr.join("")
// alert(soz);

//59-masala
// if (true) {
//   alert("False");
// } else {
//   alert("true");
// }

//60-masala
// let son = +prompt("son kiriitng");
// if (son % 2 == 0) {
//   alert("juft");
// } else {
//   alert("toq");
// }

//61-masala
// let son = +prompt("Qavatlari kiriting.");
// function qutilar(x) {
//   return x ** 2;
// }
// alert(qutilar(son))

//62-masala
// let arr = [1,2,3,5,6]
// alert(arr.join(""))

//63-masala
// let arr1 = [
//   prompt("Hohlagan soningizni kiriting"),
//   prompt("Hohlagan soningizni kiriting"),
//   prompt("Hohlagan soningizni kiriting"),
// ];
// let arr2 = [
//   prompt("Hohlagan soningizni kiriting"),
//   prompt("Hohlagan soningizni kiriting"),
//   prompt("Hohlagan soningizni kiriting"),
// ];

// function birlash(x, y) {
//   return `${x},${y}`;
// }
// alert(birlash(arr1, arr2));

//64-masala
// let arr = ["a", "b", "c", "d"];
// let xona = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "a") {
//     xona = xona + 1;
//   }
// }
// alert(xona);

//65-masala
// function getArrayElement(arr, index) {
//   return arr[index];
// }

// let arr = [1, 2, 3, 4, 5];
// alert(getArrayElement(arr, 2));

//66-masala
// let arr = [1, 2, 3, 4, 5];
// let yig = 0;
// function javob(x) {
//   for (let i = 0; i < arr.length; i++) {
//     yig = yig + x[i];
//   }
//   return yig;
// }
// alert(javob(arr));

//67-masala
// let arr = ["bir", "ikki", "uch", "to'rt", "olti"];
// let soz = prompt("Sonni soz korinishida kiriitng");
// if (soz == arr[0]) {
//   let bir = (arr[0] = "1");
// } else if (soz == arr[1]) {
//   let ikki = (arr[1] = 2);
// } else if (soz == arr[2]) {
//   let uch = (arr[2] = 3);
// } else if (soz == arr[3]) {
//   let tort = (arr[3] = 4);
// } else if (soz == arr[4]) {
//   let besh = (arr[4] = 5);
// } else if (soz == arr[5]) {
//   let olti = (arr[5] = 6);
// }
// alert(soz);

//68-masala
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let son = prompt("Son kiriting");
// function javob(x, y) {
//   for (let i = 0; i < 7; i++) {
//     if (x[i] == y) {
//       return "true";
//     } else {
//       return "false";
//     }
//   }
// }
// alert(javob(arr, son));

//69-masala
// let arr = [1, 2, "a", 4, "f"];
// function javob(x) {
//   return arr.join(", ");
// }
// alert(javob(arr));

//70-masala
// let a = +prompt("Kubigingiz nechi qator");
// function javob(x) {
//   let res = x ** 2 * 6;
//   return res;
// }
// alert(javob(a));

//71-masala
// let a = +prompt("odamlar sonini kiriting");
// function javob(x) {
//   let res = x / 5;
//   return `${res} ta avtomabil ketadi`;
// }
// alert(javob(a));

//72-masala
// let str = prompt("Nimadur kiriting");
// function javob(x) {
//   if (x == " ") {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// alert(javob(str))

//73-masala
// let height = +prompt("bo'yini kiriting");
// let eni = +prompt("enini kiriting");
// let uzunligini = +prompt("uzunligini kiriting");
// function javob(x, y, z) {
//   return x * y * z;
// }
// alert(javob(height,eni,uzunligini))

//74-masala
// let a = [1, 2, 3];
// let b = [34, 12, 5];
// let arr = "";
// function filterArray(number1, number2, array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (number1 < element && element < number2) {
//       result.push(element);
//     }
//   }

//   return result;
// }
// alert(filterArray(a, b, arr));

//75-masala
// let x = [+2, +4, "salom", +3];
// if (x[0] == "") {
//   x[0] = "number";
// } else {
//   x[0] = "string";
// }

// if (x[1] == "") {
//   x[1] = "number";
// } else {
//   x[1] = "string";
// }

// if (x[2] == "") {
//   x[2] = "number";
// } else {
//   x[2] = "string";
// }

// if (x[3] == "") {
//   x[3] = "number";
// } else {
//   x[3] = "string";
// }

// if (x[4] == "") {
//   x[4] = "number";
// } else {
//   x[4] = "string";
// }

// alert(x)

//76-masala
// function string(inputString, times) {
//     if (times < 0)
//       return 'Soni manfiy bo\'lishi mumkin emas';
//     let result = '';
//     for (let i = 0; i < times; i++) {
//       result += inputString;
//     }
//     return result;
//   }

//   let inputString = 'hello';
//   let times = 3;
//   let repeatedString = string(inputString, times);
//   console.log(repeatedString);

//77-masala
// let soz = prompt("Sizga sozingizni koplik yoki birlikligini aniqlab beraman");
// let arr = soz.split("");
// function javob(x) {
//   if (
//     x[arr.length - 1] == "r" &&
//     x[arr.length - 2] == "a" &&
//     x[arr.length - 3] == "l"
//   ) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// alert(javob(soz));

//78-masala
// let soz = "Abdulloh";
// let arr = soz.split("");
// function javob(x) {
//   let bosh = soz[0];
//   let oxir = soz[arr.length - 1];
//   return `${bosh} ${oxir}`;
// }
// alert(javob(soz));

//79-masala
// let soz = prompt("so'z kiriting");
// let arr = soz.split("");
// function javob(x) {
//   let qayta = `${x[0]}${x[1]}`;
//   let jami = arr.join("");
//   return `${qayta} . . . ${qayta} . . . ${jami}`;
// }
// alert(javob(soz));

//80-masala
// let soz = prompt("Soz kiriting");
// function javob(x) {
//   return `I am feeling ${x}`;
// }
// alert(javob(soz));

//81-masala
//ISHLOLMADIM

//82-masala
// function cod(character) {
//     return character.charCodeAt(0);
//   }

//   let character = 'A';
//   let asciiCode = cod(character);
//   console.log(asciiCode);

//83-masala
// function checkEquality(word1, word2) {
//     return word1.toLowerCase() === word2.toLowerCase();
//   }

//   let result1 = checkEquality("Hello", "hello");
//   let result2 = checkEquality("Hi", "bye");
//   console.log(result1); // true
//   console.log(result2); // false

//84-masala
// let soz = "Abdulloh";
// let arr = soz.split("");
// let jam = 0;
// function javob(x) {
//   for (let i = 0; i < 100; i++) {
//     x[i] = 1;
//     jam = jam + 1;
//     return jam;
//   }
// }

// alert(javob(soz))

//85-masala
// let jami = +prompt("Kasalanganlar soni qancha ");
// let yangi = +prompt("Yangi kasalanganlar soni");
// let hozirda = +prompt("Hozirda kasalanganlar");
// function javob(x, y, z) {
//   return x - z - y;
// }

// alert(javob(jami,yangi,hozirda));

//86-masala
// let a = "";
// let arr = a.split("");
// for (let i = 0; i < 3; i++) {
//   a[i] = prompt("nimadur kiriting");
// }
// function javob(x) {
//   return x.length * 2;
// }
// arr.join("");
// console.log(javob(a));

//87-masala
// function length(words) {
//   let lengths = [];
//   for (let i = 0; i < words.length; i++) {
//     lengths.push(words[i].length);
//   }
//   return lengths;
// }

// let words = ["salom", "hayr", "raxmat"];
// let lengths = length(words);
// console.log(lengths); 

//88-masala 
// function calculate(totalPayment) {
//   let a = 4000;
//   let b = 1000;
//   return (totalPayment - a) / b + 1;
// }

// let totalPayment = 10000;
// let distance = calculate(totalPayment);
// console.log(distance); 

//89-masala
// function letter(text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === 'd' || text[i] === 'D') {
//       count++;
//     }
//   }
//   return count;
// }

// let text = "Salom qalesiz";
// let a = letter(text);
// console.log(a); 

//90-masala
// function addSpaceInMiddle(inputString) {
//   return inputString.split('').join(' ');
// }
// console.log(addSpaceInMiddle("hello")); 

//91-masala
// function calculate(a, b) {
//   return Math.max(a, b) / Math.min(a, b);
// }
// console.log(calculate(10, 5)); 

//92-masala
// let cofee = 3;
// function calculateCoffee(coffee) {
//   cofee += coffee;
//   return cofee;
// }
// console.log(calculateCoffee(1)); 

//93-masala
// function character(text, times) {
//   let result = '';
//   for (let i = 0; i < times; i++) {
//     result += text.charAt(text.length-1);
//   }
//   return result;
// }
// console.log(character("Hello", 3)); 

//94-masala
// function javob(arr) {
//   let javob = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       javob += arr[i];
//     }
//   }
//   return javob;
// }
// console.log(javob([3, 7, 8, 2, 4, 6])); 

//95-masala
//chunmadim 

//96-masala
// function distance(travel) {
//   let total = travel.reduce((a, b) => a + b, 0);
//   let distance = total > 0 ? total : -total;
//   return distance;
// }
// console.log(distance([10, -5, 3])); 

//97-masala
// function isTriangle(side1, side2, side3) {
//   if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isTriangle(3, 4, 5)); 
// console.log(isTriangle(1, 1, 12)); 

//98-masala
// function isInRange(num1, num2) {
//   let javob = num1 + num2;
//   if (javob > num1 && javob > num2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isInRange(4, 6)); 
// console.log(isInRange(2, 1)); 

//99-masala
// function create(str) {
//   let parts = str.split('*');
//   let tag = parts[0];
//   let count = parseInt(parts[1]);
//   let result = '';
//   for (let i = 0; i < count; i++) {
//     result += '<' + tag + '></' + tag + '>';
//   }
//   return result;
// }
// console.log(create("div*2"));
// console.log(create("p*1"));
// console.log(create("li*3"));

//100-masala
// function javob(num) {
//   let javob = 0;
//   for (let i = 1; i <= num; i++) {
//     javob += i;
//   }
//   return javob;
// }
// console.log(javob(5)); 

//101-masala
// function tekshirish(value, obj) {
//   return (value > obj.min && value < obj.max);
// }
// let range = {min: 3, max: 8};
// console.log(tekshirish(5, range)); 
// console.log(tekshirish(2, range)); 

//102-masala
// function funksiya(num) {
//   return (Math.pow(num, 2) % 10 === num % 10);
// }
// console.log(funksiya(5)); 
// console.log(funksiya(7)); 

//103-masala
// function index(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + i;
//   }
//   return arr;
// }
// console.log(index([3, 6, 8, 2])); 

//104-masala
// function water(drinks) {
//   return drinks.filter(function(drink) {
//     return drink !== "sugar";
//   });
// }
// console.log(water(["water", "sugar", "tea", "coffee"])); 

//105-masala
// function count(num) {
//   let count = num.toString().split('').filter(x => !isNaN(parseInt(x, 10))).length;
//   return count;
// }
// console.log(count(5678910)); 

//106-masala
// let son = +prompt("Son kiriting men nechi xona ekanligini aytib beraman");
// let soz = son.toString();
// let arr = soz.split("");
// let quti = 0;
// function javob(x) {
//   for (let i = 0; i < soz.length; i++) {
//     if (x[i]) {
//       quti = quti + 1;
//     }
//   }
//   return quti;
// }

// alert(javob(arr));

//107-masala
// function rearrangeDigits(num) {
//   let digitArray = Array.from(String(num), Number);
//   digitArray.sort((a, b) => b - a);
//   let rearrangedNum = parseInt(digitArray.join(''));
//   return rearrangedNum;
// }
// console.log(rearrangeDigits(651234));

//108-masala
// function number(num1, num2) {
//   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// console.log(number(5, 10));

//109-masala
// function number(num) {
//   let numString = num.toString();
//   let n = numString.length;
//   let javob = 0;
//   for (let i = 0; i < n; i++) {
//     javob += Math.pow(parseInt(numString[i]), n);
//   }
//   return javob === num;
// }
// console.log(number(120)); 
// console.log(number(230)); 
// console.log(number(143)); 

//110-masala
// function count(text) {
//   let count = text.split('').filter(char => char === char.toUpperCase() && char !== char.toLowerCase()).length;
//   return count;
// }
// console.log(count("Salom qalesizlar."));