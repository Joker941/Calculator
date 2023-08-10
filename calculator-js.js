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

function updateDisplay (number) { 

    if (calcul === false) {
    
        document.querySelector(".display_operate").textContent = number;
        calcul = true;
    } else {
    
        document.querySelector(".display_operate").textContent = document.querySelector(".display_operate").textContent + number;
    
    }
}

let firstNumber, secondNumber, operator, resultat;

const digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "adding", "substracting", "dividing", "multiplicating", "egal", "clear"];

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "=", "clear"];

let calcul = false;


let one = document.querySelector(".one").addEventListener("click", function () { 
    updateDisplay (1);
});

let two = document.querySelector(".two").addEventListener("click", function () { 
    updateDisplay (2);
});

let three = document.querySelector(".three").addEventListener("click", function () { 
    updateDisplay (3);
});

let four = document.querySelector(".four").addEventListener("click", function () { 
    updateDisplay (4);
});

let five = document.querySelector(".five").addEventListener("click", function () { 
    updateDisplay (5);
});

let six = document.querySelector(".six").addEventListener("click", function () { 
    updateDisplay (6);
});

let seven = document.querySelector(".seven").addEventListener("click", function () { 
    updateDisplay (7);
});

let eight = document.querySelector(".eight").addEventListener("click", function () { 
    updateDisplay (8);
});

let nine = document.querySelector(".nine").addEventListener("click", function () { 
    updateDisplay (9);
});

let adding = document.querySelector(".adding").addEventListener("click", function () { 
    
    if (calcul === true) {

        firstNumber = parseInt(document.querySelector(".display_operate").textContent);
        operator = "+";
        updateDisplay ("+");
    }

});

let substracting = document.querySelector(".substracting").addEventListener("click", function () { 

    if (calcul === true) {

        firstNumber = parseInt(document.querySelector(".display_operate").textContent);
        operator = "-";
        updateDisplay ("-");
    }
});

let dividing = document.querySelector(".dividing").addEventListener("click", function () { 

    if (calcul === true) {

        firstNumber = parseInt(document.querySelector(".display_operate").textContent);
        operator = "/";
        updateDisplay ("/");
    }
});

let multiplicating = document.querySelector(".multiplicating").addEventListener("click", function () { 

    if (calcul === true) {
        firstNumber = parseInt(document.querySelector(".display_operate").textContent);
        operator = "*";
        updateDisplay ("*");
    }

});

let egal = document.querySelector(".egal").addEventListener("click", function () { 
    
    let findSecondNumber = document.querySelector(".display_operate").textContent;
    let operatorPosition;

    if (findSecondNumber.indexOf("+") != -1) {

        operatorPosition = findSecondNumber.indexOf("+");
        secondNumber = parseInt(findSecondNumber.substring(operatorPosition + 1));
        document.querySelector(".display_operate").textContent = operate("*", firstNumber, secondNumber);

    } else if (findSecondNumber.indexOf("-")!= -1) {

        operatorPosition = findSecondNumber.indexOf("-");
        secondNumber = parseInt(findSecondNumber.substring(operatorPosition + 1));
        document.querySelector(".display_operate").textContent = operate("-", firstNumber, secondNumber);
        
    } else if (findSecondNumber.indexOf("/")!= -1) {

        operatorPosition = findSecondNumber.indexOf("/");
        secondNumber = parseInt(findSecondNumber.substring(operatorPosition + 1));
        document.querySelector(".display_operate").textContent = operate("/", firstNumber, secondNumber);

    } else if (findSecondNumber.indexOf("*")!= -1) {
        
        operatorPosition = findSecondNumber.indexOf("*");
        secondNumber = parseInt(findSecondNumber.substring(operatorPosition + 1));
        document.querySelector(".display_operate").textContent = operate("*", firstNumber, secondNumber);

    }
    calcul = false;
});

let clear = document.querySelector(".clear").addEventListener("click", function () {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    calcul = false;
    document.querySelector(".display_operate").textContent = "0";
 });


