const numKey = '0123456789';
const opKey = '+-×÷';

let argA = '';
let argB = '';
let op = '';

// const buttons = document.querySelector("#buttons");
// buttons.addEventListener("click", event => {
//     if (event.target.nodeName == "button") {
//         screen.textContent = event.target.textContent;
//         console.log(event.target.textContent);
//     }
// })

const screen = document.querySelector('#screen');
screen.textContent = '';

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    input('9');
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    input('8');
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    input('7');
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    input('6');
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    input('5');
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    input('4');
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    input('3');
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    input('2');
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    input('1');
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    input('0');
});

const ac = document.querySelector('#ac-btn');
ac.addEventListener('click', () => {
    screen.textContent = '';
    argA = '';
    argB = '';
    op = '';
});

const equalSym = document.querySelector('#equals');
equalSym.addEventListener('click', () => input('='));

const plusSym = document.querySelector('#plus');
plusSym.addEventListener('click', () => input('+'));

const minusSym = document.querySelector('#minus');
minusSym.addEventListener('click', () => input('-'));

const multiplySym = document.querySelector('#multiply');
multiplySym.addEventListener('click', () => input('×'));

const divideSym = document.querySelector('#divide');
divideSym.addEventListener('click', () => input('÷'));

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    a = parseInt(a);
    b = parseInt(b);
    if (op == '+') return add (a, b);
    if (op == '-') return subtract (a, b);
    if (op == '×') return multiply (a, b);
    if (op == '÷') return divide (a, b);
}

function input(a) {
    if(numKey.includes(a) && op == '' && argB =='') {
        argA += a;
        screen.textContent = argA;
        console.log(argA);
    } else if(numKey.includes(a) && op != '') {
        argB += a;
        screen.textContent = argA + op + argB;
    } else if(opKey.includes(a) && argB == '') {
        op = a;
        screen.textContent = argA + op;
    } else if(a === '=') {
        argA = operate(argA, argB, op);
        argB = '';
        op = '';
        screen.textContent = argA;
    } else if(opKey.includes(a) && op != '') {
        argA = operate(argA, argB, op);
        argB = '';
        op = a;
        screen.textContent = argA + op;
    }
}

function calc() {
    argA = screen.textContent;
    console.log(argA);
}