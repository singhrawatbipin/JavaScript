// var // let // const // these three keywords are used for declaring variables in javascript. Basically, we are telling the interpreter by writing these keywords that we are going to create a variable.
/*
1. Variable name cannot start with a number.
2. Variable name can start with letter, underscore(_) and dollar($).
3. variable names are case sensitive.
*/

// let and const increase code readability

var city = 'Mumbai';

let luckyNumber = 9;
console.log(luckyNumber);

let someNum; // declared but not defined
console.log(someNum); // undefined

const ownerName = 'Bipin Singh Rawat';
//ownerName = 'X Y Z'; // typeError: assignment to constant variable

//const address; // syntax error: missing initializer in const declaration

// block level scope
{
    let city = 'New Delhi';
    console.log(city); // New Delhi
    console.log(luckyNumber); // 9
}
console.log(city); // Mumbai