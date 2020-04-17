let x = 10;
let y = String(x);
console.log(y, (typeof y)); // 10 string

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar)); // true string

let arrString = String([1, 2, 3, 4, 5, 6, 7]);
console.log(arrString.length, (typeof arrString));

let i = 10;
console.log((typeof i.toString())); // string

let str = Number("12345");
console.log((typeof str));

let arr = Number([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(arr, (typeof arr)); // NaN number

// COERCION 

let a = "123";
let b = 123;
console.log(a+b); // 123123
