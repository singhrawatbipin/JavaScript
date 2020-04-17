// Primitive and Reference types

// Primitive types data is stored in stack
// Reference types data is stored in heap

let name; // default value is undefined 
console.log(name); // undefined

let luckyColor = "red";
console.log((typeof luckyColor)); // string

let isActive; // undefined
console.log((typeof isActive)); // undefined

if (isActive) {
    console.log("true");
} else {
    console.log("false"); // false
}

let varNull = null; // primitve data type but
console.log((typeof varNull)); // object

let myArr = [1, 2, 3, 5, 6, false, 'string'];
console.log((typeof myArr));
