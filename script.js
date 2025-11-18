let argA;
let argB;
let op;

const screen = document.querySelector("#screen");
screen.textContent = "";

const nine = document.querySelector("#nine");
nine.addEventListener("click", (event) => {
    screen.textContent += 9;
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", (event) => {
    screen.textContent += 8;
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", (event) => {
    screen.textContent += 7;
});

const six = document.querySelector("#six");
six.addEventListener("click", (event) => {
    screen.textContent += 6;
});

const five = document.querySelector("#five");
five.addEventListener("click", (event) => {
    screen.textContent += 5;
});

const four = document.querySelector("#four");
four.addEventListener("click", (event) => {
    screen.textContent += 4;
});

const three = document.querySelector("#three");
three.addEventListener("click", (event) => {
    screen.textContent += 3;
});

const two = document.querySelector("#two");
two.addEventListener("click", (event) => {
    screen.textContent += 2;
});

const one = document.querySelector("#one");
one.addEventListener("click", (event) => {
    screen.textContent += 1;
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", (event) => {
    screen.textContent += 0;
});

const ac = document.querySelector("#ac-btn");
ac.addEventListener("click", (event) => {
    screen.textContent = "";
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", (event) => {
    argB = screen.textContent;
    argA = operate(argA, argB, op);
    screen.textContent = argA;
})

const plus = document.querySelector("#plus");
plus.addEventListener("click", (event) => {
    // screen.textContent = operate(argA, argB, op);
    argA = screen.textContent;
    console.log(argA);
    screen.textContent = "";
    op = "+";
})

const minus = document.querySelector("#minus");
minus.addEventListener("click", (event) => {

})

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
    if (op == '+') return add (a, b);
    if (op == '-') return subtract (a, b);
    if (op == '*') return multiply (a, b);
    if (op == '/') return divide (a, b);
}

function input(a) {
    screen.textContent = a;
}

function calc() {
    argA = screen.textContent;
    console.log(argA);
}