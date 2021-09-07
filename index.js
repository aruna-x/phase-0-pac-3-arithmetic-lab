function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function increment(num) {
    return num+=1;
}

function decrement(num) {
    return num-=1;
}

function makeInt(string) {
    let res = parseInt(string, 10);
    return res;
}

function preserveDecimal(string) {
    let res = parseFloat(string);
    return res;
}

