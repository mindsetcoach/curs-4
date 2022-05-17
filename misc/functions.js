function myFirstFunction(exampleParam) {
    // some code here
}


console.log('first line outside');

// function myFunction(exampleParam) {
let myFunction = function(exampleParam) {
    console.log('first line of the function. The param is: ' + exampleParam);
    console.log('second line of the function');
    console.log('third line of the function');

    let aLocalVar = 3;

    console.log(someValue);
    console.log(aLocalVar);
};

let someValue = 5;
let anotherValue = 6;

console.log('second line outside');

myFunction(someValue);

console.log('third line outside');

myFunction(someValue);
myFunction(anotherValue);

console.log('fourth line outside');

myFunction(anotherValue);
myFunction(anotherValue);
myFunction(anotherValue);
