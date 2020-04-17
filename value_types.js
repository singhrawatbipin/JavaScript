// VALUE TYPES //
let x = 10;
let y = x; // value 10 is assigned to the variable y
x = 11;
console.log(y); // y because x and y are independent variables

let number = 10;

function increase(number) {
    number++;
    console.log(number); // 11
}
increase(number);
console.log(number); // 10


// REFERENCE TYPES //
let obj = { value: 10 };
let obj2 = obj; // obj and obj2 both are refernce to the same object value
obj.value = 11;
console.log(obj2); // 11

function objIncrease(obj) {
    obj.value++;
} console.log(obj.value); // 11