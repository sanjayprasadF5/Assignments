/*--------------------------------------------------------------------------------------------*/
//Question 1

function parity(num) {
  if (num) {
    num % 2 == 0 ? console.log("even") : console.log("odd");
  } else {
    console.error("Argument not found!");
  }
}
parity(1);
parity(2);

/*----------------------------------------------------------------------------------------------*/

//Question 2

function maxNumber(numOne, numTwo, numThree) {
  if (numOne && numTwo && numThree) {
    var numMax = numOne > numTwo ? numOne : numTwo;
    numMax = numThree > numMax ? numThree : numMax;
    console.log(numMax);
  } else {
    console.error("Enter 3 arguments!");
  }
}
maxNumber(1, 2, 3);
maxNumber(1, 3, 2);
maxNumber(3, 2, 1);

/*--------------------------------------------------------------------------------------------*/

//Question 3

function numHeads(num) {
  var heads = 0;
  var tails = 0;
  for (i = 0; i < num; i++) {
    var coinFlip = Math.random();
    if (coinFlip < 0.5) {
      heads++;
    } else {
      tails++;
    }
  }
  console.log(heads);
}
numHeads(12);

/*------------------------------------------------------------------------------------------------*/

//Question 4
function headsRatio(num) {
  var heads = 0;
  var tails = 0;
  for (i = 0; i < num; i++) {
    var coinFlip = Math.random();
    if (coinFlip < 0.5) {
      heads++;
    } else {
      tails++;
    }
  }
  console.log(heads / num);
}
headsRatio(10);
headsRatio(10000);
headsRatio(1000000);

/*------------------------------------------------------------------------------------------------*/

//Question 5
function padChars(num, str) {
  for (i = 0; i < num + 1; i++) {
    document.write(str);
  }
}
padChars(5, "+");
padChars(7, "*");

/*------------------------------------------------------------------------------------------------*/

//Question 6
function Rollstosix() {
  var randomNumber = 1;
  var times = 0;

  randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === 6) {
    times = 1;
  } else {
    while (randomNumber) {
      if (randomNumber === 6) {
        break;
      } else {
        times++;
        randomNumber = Math.floor(Math.random() * 6) + 1;
      }
    }
  }

  console.log(times);
}
Rollstosix();

/*------------------------------------------------------------------------------------------------*/

//Question 7
function SomeDay() {
  var divSeven = document.getElementById("answer-seven");
  var ansSeven = document.createElement("p");
  if (Math.random() < 0.5) {
    ansSeven.innerHTML = "Have a GOOD Day!";
    divSeven.appendChild(ansSeven);
    ansSeven.style.fontSize = "50px";
  } else {
    ansSeven.innerHTML = "Have a BAD Day!";
    divSeven.appendChild(ansSeven);
    ansSeven.style.fontSize = "25px";
  }
}
SomeDay();
