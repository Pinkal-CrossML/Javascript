
// functions

function logger(){
    console.log('my name is Pinkal');
}

// calling / runing / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges,`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5,4);
console.log(appleOrangeJuice);

// function Declaration
function calAge1(birthYeah){
    return 2037 - birthYeah;

}
const age1 = calAge1(1991);

const calAge2 = function(birthYeah){
    return 2037 - birthYeah;
}

const age2 = calAge2(1991);
console.log(age1, age2);

// Normal function
const calcAge2 = function(birthYeah){
    return 2037 - birthYeah;
}

// arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

function cutFruitPieces(fruit){
    return fruit * 2;

}

function fruitProcessor(apples, orange){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(orange);

    const justce = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return justce;
}
console.log(fruitProcessor(2,3));


// introduction to Array


const friends = ['pinkal', 'aman', 'ram'];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

const firsName = 'Jon'
const jonas = [firsName,'Janas','Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// basic method of array

const friends = ['pinkal', 'aman', 'ram'];
friends.unshift('johan');
friends.push('jay');
console.log(friends);
console.log(friends.indexOf('aman'));
console.log(friends.includes('ram'));

if (friends.includes('aman')){
    console.log('You have this friend');
}
else{
    console.log('No friend');
}


// for loop
for (let rep = 1; rep <= 10; rep++){
    console.log("Hello");
}


// while loop
let rep = 1;
while (rep <= 10){
    console.log('hi');
    rep++;
}




