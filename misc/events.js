
// console.log('test'); // 'test' here is a: string , parameter , string literal

let theButton = document.getElementById('theButton');


let onMouseClick = function(theEvent) {
    alert('the user pressed the ' + theEvent.currentTarget.innerHTML);
};

let onMouseEnter = function(theEvent) {
    console.log('the user found the button with the mouse');
};

// theButton.addEventListener('click', onMouseClick);
// theButton.addEventListener('mouseenter', onMouseEnter);

let theInput = document.getElementById('theInput');
// theInput.addEventListener('keydown', function() {
//     console.log('the user found the input and writes with the keyboard');
// });

let myObject = {
    number: 4,
    boolean: true,
    function: function() {
        console.log();
    }
};