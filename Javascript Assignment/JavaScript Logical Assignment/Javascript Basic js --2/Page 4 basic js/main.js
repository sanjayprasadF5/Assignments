//Question 1
/*
document.write("Hello world");
*/

//Question 2

/*
function greeting() {
  var name = document.getElementById("username").value;

  document.write("Good Morning " + name);
}
*/

//Question 3
/*
function greeting() {
  var name = document.getElementById("username").value;
  if (name === "Alice" || name === "Bob") {
    document.write("Good Morning " + name);
  } else {
    document.write("i don't know you guys");
  }
}
*/

//Question 4
/*
function sumofNum() {
  var N = document.getElementById("number").value;
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;
  }

  document.write(total);
}
*/

//Question 5
/*
function sumofNum() {
  var N = document.getElementById("number").value;
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;

    if (total % 3 == 0 && total % 5 == 0) {
      document.write(total);
    }
  }
}
*/

//Question 6

//Question 7
/*
function FindTable() {
  for (let i = 1; i <= 12; i++) {
    var no = document.getElementById("number").value;
    const result = i * no;

    //  console.log(`${no} * ${i} = ${result}`);
    document.write(no + "" + result);
  }
}
*/

//Question 10
/*
var year = document.getElementById("year");
var counter = 20;
var result = true;

function leapyear(year, counter, result) {
  while (counter >= 0) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      result = true;
      console.log(year);
      year++;
      counter--;
    } else {
      year++;
    }
  }
}
*/

//Question 11
/*
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
document.write(largest);
*/

//Question 12
/*
var arr = [0, 1, 2, 3].reverse();
document.write("Reversed array is : " + arr);

//Question 13
const array = [1, 2, 3];
const value = 4;
const isInArray = array.includes(value);
document.write("Satatus:" + isInArray);
*/

//Question 14
/*
var array = [1, 2, 3, 4, 5];

function position() {
  for (var i = 1; i < array.length; i = i + 2) {
    document.write(array[i]);
  }
}
position();
*/

//Question 15
/*
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo").innerHTML = fruits.length;
}
*/

//Question 16
/*
function checkPalindrome(str) {
  const arrayValues = string.split("");

  const reverseArrayValues = arrayValues.reverse();

  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    document.write("It is a palindrome");
  } else {
    document.write("It is not a palindrome");
  }
}

const string = prompt("Enter a string: ");

checkPalindrome(string);
*/

//Question 19
/*
let arr1 = [0, 1, 2];
let arr2 = [3, 5, 7];
let primes = arr1.concat(arr2);
document.write(primes);
*/

//Question 20
/*

const arr1 = [34, 21, 2, 56, 17];
const arr2 = [12, 86, 1, 54, 28];
let run = 0,
  first = 0,
  second = 0;
const newArr = [];
while (run < arr1.length + arr2.length) {
  if (first > second) {
    newArr[run] = arr2[second];
    second++;
  } else {
    newArr[run] = arr1[first];
    first++;
  }
  run++;
}
document.write(newArr);
*/
