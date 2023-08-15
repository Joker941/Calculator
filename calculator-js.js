/* DECLARATION DES FONCTIONS */

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
            result = Math.round(add(number1, number2) * 100) / 100;
        break;

        case "-":
            result = Math.round(substract(number1, number2) * 100) / 100;
        break;

        case "*":
            result = Math.round(multiply(number1, number2) * 100) / 100;
        break;

        case "/":
            result = Math.round(divide(number1, number2) * 100) / 100;
        break
    }

    let operations = document.querySelector(".operations_history>p").innerHTML;
    document.querySelector(".operations_history>p").innerHTML = operations + "" + number1 + " " + operator + " " + number2 + " = " + result + "<br>";
    return result;
}

function sequenceOperation (firstNumber) {

    let findSecondNumber = document.querySelector(".display_operate").textContent;
    let operatorPosition;

    if (findSecondNumber.indexOf("+") != -1) {

        operatorPosition = findSecondNumber.indexOf("+");
        secondNumber = parseInt(findSecondNumber.substring(operatorPosition + 1));
        document.querySelector(".display_operate").textContent = operate("+", firstNumber, secondNumber);

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
}
function updateDisplay (number) { 

    if (calcul === false) {
    
        document.querySelector(".display_operate").textContent = number;
        calcul = true;
    } else {
    
        document.querySelector(".display_operate").textContent = document.querySelector(".display_operate").textContent + number;
    
    }
}

/* FIN DE DECLARATION DES FONCTIONS */

/* DECLARATION DES VARIABLES */

let firstNumber, secondNumber, operator, resultat;


let calcul = false;

let zero = document.querySelector(".zero"), one = document.querySelector(".one"), two = document.querySelector(".two"), three = document.querySelector(".three"), four = document.querySelector(".four"), five = document.querySelector(".five"), six = document.querySelector(".six"), seven = document.querySelector(".seven"), eight = document.querySelector(".eight"), nine = document.querySelector(".nine");

let adding = document.querySelector(".adding"), substracting = document.querySelector(".substracting"), multiplicating = document.querySelector(".multiplicating"), dividing = document.querySelector(".dividing");

let suppression = document.querySelector(".delete");

let egal = document.querySelector(".egal");

let clear = document.querySelector(".clear");

/* FIN DE DECLARATION DES VARIABLES */

/* DECLARATION DES EVENT LISTENERS */

zero.addEventListener("click", function () {
    updateDisplay(0);
});

one.addEventListener("click", function () { 
    updateDisplay (1);
});

two.addEventListener("click", function () { 
    updateDisplay (2);
});

three.addEventListener("click", function () { 
    updateDisplay (3);
});

four.addEventListener("click", function () { 
    updateDisplay (4);
});

five.addEventListener("click", function () { 
    updateDisplay (5);
});

six.addEventListener("click", function () { 
    updateDisplay (6);
});

seven.addEventListener("click", function () { 
    updateDisplay (7);
});

eight.addEventListener("click", function () { 
    updateDisplay (8);
});

nine.addEventListener("click", function () { 
    updateDisplay (9);
});

suppression.addEventListener("click", function () { 

    let supChar = document.querySelector(".display_operate").textContent;

    supChar = supChar.substring(0, supChar.length - 1);

    if (supChar.length == 0) {
        document.querySelector(".display_operate").textContent = "0";
    } else {

        document.querySelector(".display_operate").textContent = supChar;
    }
    
});

adding.addEventListener("click", function () { 
    
    if (calcul === true) {

        let temporaryDisplay = document.querySelector(".display_operate").textContent;

        if (temporaryDisplay.indexOf("+")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("+")));

        } else if(temporaryDisplay.indexOf("-")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("-")));

        } else if(temporaryDisplay.indexOf("/")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("/")));

        } else if (temporaryDisplay.indexOf("*")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("*")));

        }

            sequenceOperation(firstNumber);
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            updateDisplay("+");
                        
        } else {
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            operator = "+";
            updateDisplay ("+");
        }

});

substracting.addEventListener("click", function () { 

    if (calcul === true) {

        let temporaryDisplay = document.querySelector(".display_operate").textContent;

        if (temporaryDisplay.indexOf("+")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("+")));

        } else if(temporaryDisplay.indexOf("-")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("-")));

        } else if(temporaryDisplay.indexOf("/")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("/")));

        } else if (temporaryDisplay.indexOf("*")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("*")));

        }
            sequenceOperation(firstNumber);
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            updateDisplay("-");
                        
        } else {
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            operator = "-";
            updateDisplay ("-");
        }
});

dividing.addEventListener("click", function () { 

    if (calcul === true) {

        let temporaryDisplay = document.querySelector(".display_operate").textContent;

        if (temporaryDisplay.indexOf("+")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("+")));

        } else if(temporaryDisplay.indexOf("-")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("-")));

        } else if(temporaryDisplay.indexOf("/")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("/")));

        } else if (temporaryDisplay.indexOf("*")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("*")));

        }
            sequenceOperation(firstNumber);
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            updateDisplay("/");
                        
        } else {
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            operator = "/";
            updateDisplay ("/");
        }
});

multiplicating.addEventListener("click", function () { 

    if (calcul === true) {

        let temporaryDisplay = document.querySelector(".display_operate").textContent;

        if (temporaryDisplay.indexOf("+")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("+")));

        } else if(temporaryDisplay.indexOf("-")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("-")));

        } else if(temporaryDisplay.indexOf("/")!= -1) {

            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("/")));

        } else if (temporaryDisplay.indexOf("*")!= -1) {
            
            firstNumber = parseInt(temporaryDisplay.substring(0, temporaryDisplay.indexOf("*")));

        }
            sequenceOperation(firstNumber);
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            updateDisplay("*");
                        
        } else {
            firstNumber = parseInt(document.querySelector(".display_operate").textContent);
            operator = "-";
            updateDisplay ("*");
        }

});

egal.addEventListener("click", function () { 
    
    sequenceOperation(firstNumber);

    calcul = false;
});

clear.addEventListener("click", function () {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    calcul = false;
    document.querySelector(".display_operate").textContent = "0";
    document.querySelector(".operations_history>p").textContent = "";
 });

/* FIN DE DECLARATION DES EVENT LISTENERS */


