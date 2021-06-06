// Question 1
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
let rectanglefirst = new Rectangle(35, 20);
console.log("Initial: ", rectanglefirst);

rectanglefirst.height = 12;
console.log("Modified : ", rectanglefirst);

/*--------------------------------------------------------------------------------------------------------*/

//Question 2

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

let rectanglesecond = new Rectangle(20, 21, 23);
console.log("Get Area :" + rectanglesecond.getArea());

/*--------------------------------------------------------------------------------------------------------*/

//Question 3

let r = new Rectangle(12, 32);

r.height = 50;

console.log("New " + r.getArea());

/*--------------------------------------------------------------------------------------------------------*/

// Quesiton 4

let personObject = {
  firstName: "Light",
  lastName: "Yagami",
};
console.log(`Full Name ${personObject.firstName} ${personObject.lastName}`);
personObject.lastName = "Hatake";
console.log(`Full Name ${personObject.firstName} ${personObject.lastName}`);

/*--------------------------------------------------------------------------------------------------------*/

//Question 5

personObject.middleName = "Haku";
console.log(`MiddleName ${personObject.middleName}`);

/*--------------------------------------------------------------------------------------------------------*/

//Question 6

let person_two = {
  firstName: "sasuke ",
  lastName: "uchiha",
};
console.log(person_two);
console.log(eval(" + person_two + "));

/*--------------------------------------------------------------------------------------------------------*/

//Question 7

let person_three = JSON.parse({
  firstName: "minato",
  lastName: " namikaze",
});
console.log(person_three);
