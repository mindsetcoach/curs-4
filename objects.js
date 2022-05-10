// objects

let myFirstObject = {};

myFirstObject = {
    firstAttribute: 1
};
myFirstObject = {
    first: 'abc',
    second: 2,
    third: true
};
myFirstObject = {
    a: 1,
    b: 2,
    ccc: myFirstObject,
    d: 3
};

let anotherObject = {
    aa: 3,
    bb: 5,
    cccc: {
        a1: 'abc',
        a2: 'bvf'
    }
};

let notOurObject = document.getElementsByTagName('body');
let againNotOurObject = document.getElementsByTagName('body')[0];

console.log(
    anotherObject.bb
);

anotherObject.cccc.a2 = 'aaaaa';

console.log(
    anotherObject.cccc.a2
);

console.log(
    anotherObject['cccc']['a2']
);