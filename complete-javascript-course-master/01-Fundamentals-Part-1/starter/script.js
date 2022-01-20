/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let firstjob = "Coder";
let currentjob = "Teacher"

let job1 = "programmer"
let job2 = "teacgher";

console.log(myFirstJob)



let javascriptIsFun = true;
console.log(true);

//console.log(typeof true); //true
console.log(typeof javascriptIsFun); //boolean
//console.log(typeof 23); //number
//console.log('Jonas'); //string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
console.log(age);

var job = 'programer';
job = 'teacher';










//operators in JavaScript

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 2 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


// Assignment Operators
let x = 10 + 5; //=15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comperaison operators
console.log(ageJonas > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 19;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018);
*/

//console.log(25 - 10 - 5);
/*
let x, y; // y is assigned as an anti variable
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK
//markWeight = 78
//markHeight = 1.69
//console.log(markWeight, markHeight);
//let markbmi = markWeight / markHeight ** 2;
//console.log(markbmi);
markWeight = 95
markHeight = 1.88
console.log(markWeight, markHeight);
let markbmi = markWeight / markHeight ** 2;
console.log(markbmi);

johnWeight = 85
johnHeight = 1.76
console.log(johnWeight, johnHeight);
let johnbmi = johnWeight / johnHeight ** 2;
console.log(johnbmi);

let markHigherBMI = (markbmi > johnbmi);
console.log(markHigherBMI);

// strings & literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037
// type cortion
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
//temporate litteral

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
//backticks string
console.log`Just a regular string...`
//multi-lined strings
console.log('String with \n\
multiple \n\
lines');

console.log(`Strings
multiple
lines`);


// if / else 
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21;
}
console.log(century)
*/

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

