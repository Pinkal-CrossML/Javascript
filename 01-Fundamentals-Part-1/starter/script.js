let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "programmer"
console.log(myFirstJob)


console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
// the const is never change

// operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = 'pinkal';
const lastName = 'sanoria';

console.log(firstName + " " + lastName);

// assigment operators
let x = 10 + 5;
x += 10; // x = x + 10
console.log(x); //25

x++; // x = x + 1
x--;

// camparing operators
console.log(ageJonas > ageSarah);



const now = 2037;
const ageJonas = now - 1991;
const ageSarahb = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarahb / 2;
console.log(ageJonas, ageSarahb, averageAge);

// coding challenge
const mheight = 1.69;
const mmass = 78;
const mbmi = mmass / (mheight * mheight);
console.log(mbmi);
const jheight = 1.95;
const jmass = 92;
const jbmi = jmass / (jheight * jheight);
console.log(jbmi);
if (mbmi > jbmi) {
      console.log("mbim id greter");
}
else {
      console.log | ("jbmi is greter");
}
// end coding challenge


const firstName = 'jonas';
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ',a ' + (year - birthYear) + ' yera old ' + job + '!';
console.log(jonas);

const jonasNew = `i'm  ${firstName}`;
console.log(jonasNew);

const age = 15;

if (age >= 18) {
      console.log('pooja can start driving ');
}
else {
      console.log('No problem you are papa ki pari you can do anythink ')
}

// type conversion
const inpuYear = '1991';
console.log(typeof (Number(inpuYear)));

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - '3');

// Equality operators = vs ===

const age = '18';
if (age === 18) console.log('You just become an adult :D (strict');
if (age == 18) console.log('You just become an adult :D (loose)');
prompt("what's your favourite number?");

// logic opetator

const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);



// switch Statement

const day = 'tues';

switch (day) {

      case 'monday':
            console.log("it's monday");
            break;
      case 'tuesday':
            console.log("it's tuesday");
            break;
      default:
            console.log('Not a valid day!');

}

