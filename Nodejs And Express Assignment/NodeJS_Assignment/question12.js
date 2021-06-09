let ts = Date.now();

let date = new Date(ts);

//currentdate
let date1 = date.getDate();

//current month
let month = date.getMonth() + 1;

//current year
let year = date.getFullYear();

//currenthours
let hours = date.getHours();

// currentminutes
let minutes = date.getMinutes();

// current seconds
let seconds = date.getSeconds();
// prints date & time

console.log(
  date1 + "-" + month + "-" + year + "-" + hours + ":" + minutes + ":" + seconds
);
