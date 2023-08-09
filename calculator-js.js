function add (number1, number2) {
    return number1 + number2;
}

function substract (number1, number2) {
    return number1 - number2;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
    return number1 / number2;
}

function operate (operator, number1, number2) {

    let result = 0;

    switch (operator) {
        case "+":
            result = add(number1, number2);
        break;

        case "-":
            result = substract(number1, number2);
        break;

        case "*":
            result = multiply(number1, number2);
        break;

        case "/":
            result = divide(number1, number2);
        break
    }

    return result;
}

const digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "adding", "substracting", "dividing", "multiplicating", "egal", "clear"];

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "=", "clear"];

const operation = [];

digit.forEach(function callback(value, index) {

    document.querySelector("." + value).addEventListener("click", function () {

        if (value == "clear") {

            document.querySelector(".display_operate").textContent = "";

        } else if (value == "adding" || value == "substracting" || value == "dividing" || value == "multiplicating") {

            let display = document.querySelector(".display_operate").textContent;
            document.querySelector(".display_operate").textContent = display + number[index];

        } else if (value == "egal") {
            
            let display = document.querySelector(".display_operate").textContent;
            console.log(display);

        } else {
            let display = document.querySelector(".display_operate").textContent;
            document.querySelector(".display_operate").textContent = display + number[index];
        }
        console.log(number[index]);

    })
    
});

operation = Array.from(display);

for (let i = 0; i < operation.length; i++) {
    console.log(operation[i]);
}
let firstNumber, secondNumber, operator;


