
let a = 5;
let b = 6;

let sumOfTwoNumbers = function(n1, n2) {
    console.log(n1 + n2);
};

let averageOfArrayItems = function(theArray) {

    let sum = 0;
    for (let i = 0; i < theArray.length; i++) {
        sum = sum + theArray[i];
    }

    return sum / theArray.length;
};

sumOfTwoNumbers(a, b); // expression , a function invocation
sumOfTwoNumbers(a, 6);


let result1 = sumOfTwoNumbers(103, 345); // a variable definition and assignment
let result2 = averageOfArrayItems([4, 6, 7, 8, 9, 1, 2]);

console.log(result2);
