/*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Question 1

let x = 2;
let you = 10;
const promiseone = new Promise((resolve, reject) => {
  resolve(x);
});
const promisetwo = new Promise((resolve, reject) => {
  resolve(you);
});

Promise.all([promiseone, promisetwo]).then((k) => {
  console.log(
    k.reduce(function (accumulator, current) {
      return accumulator + current;
    })
  );
});

/*--------------------------------------------------------------------------------------------------------*/

//Question 2

let sum1 = 0;
class Account {
  constructor(id, name1, balance) {
    this.id = id;
    this.name1 = name1;
    this.balance = balance;
    sum1 += this.balance;
  }

  getBalance() {
    return sum1;
  }
}

class SavingsAccount extends Account {
  constructor(id, name1, balance, interest) {
    super(id, name1, balance);
    this.interest = interest;
  }
}

class CurrentAccount extends Account {
  constructor(id, name1, balance, cash_credit) {
    super(id, name1, balance);
    this.cash_credit = cash_credit;
  }
  getBalance() {
    return super.getBalance();
  }
}

// Instantiate the class
let save_one = new SavingsAccount(1, "Naruto", 3000, 12);
let save_two = new SavingsAccount(2, "Sasuke", 2300, 12);
let save_three = new SavingsAccount(3, "kakashi", 2500, 30);
let curr_one = new CurrentAccount(4, "Tobi", 1800, 22);
let curr_two = new CurrentAccount(5, "Hashirama", 5000, 35);

console.log(curr_one.getBalance());



/*------------------------------------------------------------------------------------------------*/

//Question 3

interface Printable { 
    firstName:string, 
    lastName:string, 
    print: ()=>string 
 } 
 
 var circle:Printable = { 
    print: ():string =>{return "Hi, you are a circle!!!"} 
 }
 
 var employee:Printable = { 
    firstName:"naruto",
    lastName:"sasuke", 
    print: ():string =>{return "Hello, you are an employee!!!"} 
 } 

 function printAll(employee: {firstName, lastName, print}, circle: {print}){
    console.log(employee.print());
    console.log(circle.print());
 }

 printAll({ 
    firstName:"naruto",
    lastName:"sasuke", 
    print: ():string =>{return "Hello, you are an employee!!!"} 
 } ,{ 
    print: ():string =>{return "Hi, you are a circle!!!"} 
 });



 /*------------------------------------------------------------------------------------------------*/
 