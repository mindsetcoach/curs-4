

let myNumber = 7;
let myString = 'the string';
let myBoolean = true;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);

let theTypeOfMyVar = typeof myBoolean;

console.log(typeof theTypeOfMyVar);


// arrays

let myArray = [];

myArray = [1];
myArray = ['abc', 2, true];
myArray = ['abc', 'ass', 'fgtt', '', 'dasfasasfasdas'];
myArray = [1, 2, myArray, 3];

let myOtherArray = [
    3,
    5,
    [
        'abc',
        'bvf'
    ],
    8,
    2
];

myOtherArray = [
    [2, 4], //0
    [6, 1], //1
    [5, 5], //2
    [3, 4], //3
];

myArray[2][4] = 'aaaaaa';

console.log(
    myArray[2][4]
);

console.log(
    myArray[2].length
);
