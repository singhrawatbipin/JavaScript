function reverseArr(arr) {
    let rArr = new Array;
    for (let i = arr.length - 1; i >= 0; i--) {
        rArr.push(arr[i]);
    } return rArr;
} console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));
