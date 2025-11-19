// Declare constants for type of key

const numKey = '0123456789';
const opKey = '+-×÷';

// Initiate argument and operator variables
let argA = '';
let argB = '';
let op = '';

// Create variable for screen content, initialize with empty string
const screen = document.querySelector('#screen');
screen.textContent = '';

// Button variables and event listeners
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => input('9'));

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => input('8'));

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => input('7'));

const six = document.querySelector('#six');
six.addEventListener('click', () => input('6'));

const five = document.querySelector('#five');
five.addEventListener('click', () => input('5'));

const four = document.querySelector('#four');
four.addEventListener('click', () => input('4'));

const three = document.querySelector('#three');
three.addEventListener('click', () => input('3'));

const two = document.querySelector('#two');
two.addEventListener('click', () => input('2'));

const one = document.querySelector('#one');
one.addEventListener('click', () => input('1'));

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => input('0'));

const ac = document.querySelector('#ac-btn');
ac.addEventListener('click', () => input('ac'));

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => input('⬅︎'));

const percent = document.querySelector('#percent');
percent.addEventListener('click', () => input('%'));

const plusSym = document.querySelector('#plus');
plusSym.addEventListener('click', () => input('+'));

const minusSym = document.querySelector('#minus');
minusSym.addEventListener('click', () => input('-'));

const multiplySym = document.querySelector('#multiply');
multiplySym.addEventListener('click', () => input('×'));

const divideSym = document.querySelector('#divide');
divideSym.addEventListener('click', () => input('÷'));

const equalSym = document.querySelector('#equals');
equalSym.addEventListener('click', () => input('='));

const point = document.querySelector('#point');
point.addEventListener('click', () => input('.'));

const posNeg = document.querySelector('#posneg');
posNeg.addEventListener('click', () => input('±'));

// Create functions for each of the math operations
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

function makePercent(a) {
    a = parseFloat(a);
    return a / 100;
}

// Function which calls up math operations depending on operator
function operate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (op == '+') return add (a, b);
    if (op == '-') return subtract (a, b);
    if (op == '×') return multiply (a, b);
    if (op == '÷') return divide (a, b);
}

// Function which refreshes display and limits display string length
function scrLimit() {
    const scrContent = argA + op + argB;
    console.log("argA: " + argA + " op: " + op + " argB: " + argB);
    console.log("scrcont: " + typeof scrContent)
    screen.textContent = scrContent;
    if(scrContent.length > 11) {
        screen.textContent = scrContent.slice(0, 11);
    }
}

// Function which limits decimal places
function decLimit() {
    argA = argA.toString();
    argB = argB.toString();
    if(argA.includes('.') && ((argA.indexOf('.') - argA.length) <= -3)) {
        argA = Math.round(parseFloat(argA) * 1000) / 1000;
    } 
    if (argB.includes('.') && ((argB.indexOf('.') - argB.length) <= -3)) {
        argB = Math.round(parseFloat(argB) * 1000) / 1000;
    }
}

// Function which handles input 'a'
function input(a) {
    if(numKey.includes(a) && op == '' && argB == '') {
        argA += a;
        scrLimit();
    } else if(numKey.includes(a) && op != '') {
        argB += a;
        scrLimit();
    } else if(opKey.includes(a) && argB == '' && argA != '') {
        op = a;
        scrLimit();
    } else if(a === '=' && op === '÷' && argB === '0') {
        screen.textContent = "To infinity and beyond!";
    } else if(a === '=') {
        argA = operate(argA, argB, op);
        argB = '';
        op = '';
        screen.textContent = argA;
        argA = '';
    } else if(opKey.includes(a) && op != '') {
        argA = operate(argA, argB, op);
        argB = '';
        op = a;
        scrLimit();
    } else if(a === '±') {
        if(argB != '') {
            argB = parseFloat(argB) * (-1);
        } else if(argA != '') {
            argA = parseFloat(argA) * (-1);
        }
        scrLimit();
    } else if(a === '.') {
        if(argB != '' && !argB.includes('.')) {
            argB += '.';
        } else if(argA != '' && argB == '' && !argA.includes('.')) {
            argA += '.';
        } else if(argA == '') {
            argA += '0.';
        }
        scrLimit();
    } else if(a === '%') {
        if(argB != '') {
            argB = makePercent(argB);
        } else if (argA != '') {
            argA = makePercent(argA);
        }
        scrLimit();
    } else if(a === '⬅︎') {
        if(argB != '') {
            argB = argB.slice(0, -1);
        } else if (argA != '') {
            argA = argA.slice(0, -1);
        }
        scrLimit();
    } else if(a === 'ac') {
        argA = '';
        argB = '';
        op = '';
        scrLimit();
    }
    decLimit();
}