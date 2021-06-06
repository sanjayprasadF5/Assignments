/*--------------------------------------------------------------------------------------------*/
//Question 1
var four_number = [];
for (i = 0; i < 4; i++) {
  four_number[i] = Math.random();
}
console.log(four_number);

/*--------------------------------------------------------------------------------------------*/
//Question 2
var hundred_number = [];
for (i = 0; i < 100; i++) {
  hundred_number[i] = Math.random();
}
console.log(hundred_number);

/*--------------------------------------------------------------------------------------------*/
//Question 3

var strings = ["1.2", "2.3", "3.4"];
var nums = [];

function numberArray(strings) {
  for (i = 0; i < strings.length; i++) {
    strings[i] = Number(strings[i]);
  }

  return strings;
}
nums = numberArray(strings);
console.log(nums);

/*--------------------------------------------------------------------------------------------*/

//Question 4

function element_remove(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === "") {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function longestToken(string) {
  var arrayOfstring = string.split("ab");
  var longestString = "";
  if (!(arrayOfstring.includes("a") || arrayOfstring.includes("b"))) {
    element_remove(arrayOfstring);
    longestString = arrayOfstring.reduce((a, b) => {
      return a.length > b.length ? a : b;
    });
  }
  return longestString;
}
console.log(longestToken("djoiashsbsbfsdbfbaaa"));
console.log(longestToken("iash"));

/*--------------------------------------------------------------------------------------------*/

//Question 5

function lengthOfNonQWords(strings) {
  var totalLength = 0;
  for (i = 0; i < strings.length; i++) {
    if (strings[i].includes("q")) {
      continue;
    } else {
      totalLength += strings[i].length;
    }
  }
  console.log(totalLength);
}
lengthOfNonQWords(["stop", "quit", "exit"]);
lengthOfNonQWords(["queen", "quit"]);
