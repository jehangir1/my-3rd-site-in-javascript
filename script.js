// Math Calculator


// Created variables for storing users inputs 
var numberOne , numberTwo = 0;
var operator = " ";
var result = 0;

// Taking inputs from users
numberOne = +prompt("Enter any number: ", "");
operator = prompt("Enter any one operator (+, -, *, /, %, **)");
numberTwo = +prompt("Enter the second number: ", "");


if ((numberOne && numberTwo) !== isNaN  && operator === "+") {

    // Stores Addition
    result = numberOne + numberTwo;
    alert(numberOne + " + " + numberTwo + " = " + result)

}else if ((numberOne && numberTwo) !== isNaN  && operator === "-") {

    // Stores Subtraction
    result = numberOne - numberTwo;
    alert(numberOne + " - " + numberTwo + " = " + result)

}else if ((numberOne && numberTwo) !== isNaN  && operator === "*") {

    // Stores Multiplication
    result = numberOne * numberTwo;
    alert(numberOne + " * " + numberTwo + " = " + result)

}else if ((numberOne && numberTwo) !== isNaN  && operator === "/") {

    // Stores Division
    result = numberOne / numberTwo;
    alert(numberOne + " / " + numberTwo + " = " + result)
}else if ((numberOne && numberTwo) !== isNaN  && operator === "%") {

    // Stores Modules
    result = numberOne % numberTwo;
    alert(numberOne + " % " + numberTwo + " = " + result)

}else if ((numberOne && numberTwo) !== isNaN  && operator === "**"){

    // Stores Exponentiation
    result = numberOne ** numberTwo;
    alert(numberOne + " ** " + numberTwo + " = " + result)
    
}else{
    // Show Invalid Command if User input wrong number or Operator
    alert("Invalid input");
}