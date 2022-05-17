

if (1 === 3 || 2 === 2) {
    console.log('our condition is true');
} else {
    console.log('our condition is NOT!!! true');
}


for (let index = 3; index < 10; index++) {
    console.log('this will repeat itself');
}



if (1 === 3 || 2 === 2) {
    if (1 === 3) {
        console.log('1');
    } else {
        console.log('2');
    }
    if (1 === 3) {
        console.log('6');
    }
} else {
    if (2 === 2) {
        if (1 === 3 || 2 === 2) {
            console.log('3');
        } else {
            console.log('4');
        }
    } else {
        console.log('5');
    }
}


for (let index = 3; index < 5; index++) {

    console.log('this will repeat itself');

    for (let a = -1; a < 1; a++) {

        console.log('this will repeat itself even more');

        if (index % a === 0) {
            console.log('wow');
        }
    }
}

let n = 34;
for (let i = 0; i < n; i++) {
    console.log('something');
}


let array1 = [];
// [3, 6, 9, 12, ... , 33]
array1[0] = 3;
array1[1] = 6;
array1[2] = 9;
array1[3] = 12;
// ...


let N = prompt('please enter a number');
let array2 = [];
// [3, 6, 9, 12, ... , N]

let j = 0;
for (let i = 3; i <= N; i = i + 3) {
    array2[j] = i;
    j++;
}

// ...

console.log(array2);
