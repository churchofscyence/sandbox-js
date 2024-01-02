console.log("<------------------------- Call Back ------------------------->");

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

function print(number) {
    console.log("Just Print: "+ number);
}

myCalculator(5, 5, print);

function increaseByOnePrint(number) {

    number = number + 1;
    console.log("Increase By One Then Print: " + number);
}

myCalculator(5, 5, increaseByOnePrint);