const display = document.getElementById('display');
let lastValue = 0;
let currentValue = 0;
let operator = '+';
let result = 0;
let lastInput = null;

let tempResult = 0;
let tempLastValue = 0;

function clearDisplay(type) {
    if (type === 'all') {
        display.value = '0';
        lastValue = 0;
        currentValue = 0;
        operator = '+';
        result = 0;
        lastInput = null;
    } else if (type === 'last') {
        display.value = '0';
        currentValue = 0;
    }
}

function userInput(input) {
    if (typeof input === 'number') {
        appendNumber(input);
    } else if (input === '+' || input === '-' || input === '*' || input === '/') {
        processOperator(input, result);
    } else if (input === '=') {
        processOperator(input, result);
        result += lastValue;
        currentValue = 0;
        lastValue = 0;
        display.value = result;
    } else if (input === '.') {
        appendDot();
    }
    lastInput = input;
}

function appendNumber(input) {
    if (!currentValue || currentValue === 0) {
        display.value = input;
    } else {
        display.value += input;
    }
    currentValue = eval(display.value);
}
function calculateTempResult() {
    tempResult = result;
    tempLastValue = lastValue;
    switch (operator) {
        case '+':
            if (lastInput === '+') {
                break;
            }
            tempResult += lastValue;
            tempLastValue = currentValue;
            break;
        case '-':
            if (lastInput === '-') {
                break;
            }
            tempResult += lastValue;
            tempLastValue = -currentValue;
            break;
        case '*':
            if (lastInput === '*') {
                break;
            }
            tempLastValue = lastValue * currentValue;
            break;
        case '/':
            if (lastInput === '/') {
                break;
            }
            tempLastValue = lastValue / currentValue;
            break;
    }
}
function appendOperator() {
    switch (operator) {
        case '+':
            if (lastInput === '+') {
                break;
            }
            result += lastValue;
            lastValue = currentValue;
            break;
        case '-':
            if (lastInput === '-') {
                break;
            }
            result += lastValue;
            lastValue = -currentValue;
            break;
        case '*':
            if (lastInput === '*') {
                break;
            }
            lastValue = lastValue * currentValue;
            break;
        case '/':
            if (lastInput === '/') {
                break;
            }
            lastValue = lastValue / currentValue;
            break;
    }
}

function processOperator(input) {
    if (input === '+' || input === '-') {
        calculateTempResult();
        tempResult += tempLastValue;
        display.value = tempResult;
    }
    appendOperator();
    currentValue = 0;
    operator = input;
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}