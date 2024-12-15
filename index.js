
var age =18
if (age>=18) {
    console.log("Rahul")
}
if (age<21) {
    console.log("Ravi")
}
for (i=0; i<5; i++) {
    console.log("one")
    break
    console.log("two")
}


for (var j=0;j<2;j++) {
    for (var i=0;i<=5;i++) {
        console.log("one")
        break;
    }
    break;
}



function demo() {
    for (i=0;i<=2;i++) {
        console.log("i")
    }
    return "completed";
}
console.log(demo())




function demo() {
    var i = 10;
    console.log(i);
}
demo();
console.log(i);


function sample() {
    console.log(x);
    return 10;
    var x;
}
(sample())





function sample() {
    console.log(x);
    return 10;
    var x;
}
console.log(sample())



function demo() {
    var i=10
    console.log(i);
}
demo()
console.log(i)




function sample() {
    console.log(x);
    return 10;
    var x;
}
sample()



function sample() {
    console.log(x, y);
    return 10;
    var x;
    function y() {
        console.log('y')
    }
}
sample()


console.log(x)
console.log(demo1)
var x=10
function demo1() {
    console.log(x)
}
demo1()



console.log(x)
console.log(demo1)
var x=10
function demo1() {
    var x=30
    console.log(x)
}
demo1()


console.log(x)
console.log(demo1)
var x=10
var y=10
function demo1() {
    console.log(y)
    console.log(x)
    var x=30
    console.log(x)
}
demo1()



console.log(x)
console.log(demo1)
var x=10
var y=10
function demo1() {
    console.log(y)
    console.log(x)
    var x=30
    return x
    console.log(x)
}
demo1()


function xyz() {
    for (var i = 1; i <= 5; i++) {
        return i;
    }
    console.log(i);
}
console.log(xyz());  // 1



function abc(a, b, c) {
    console.log(a + b + c);
    return pqr(a, b);
}
function pqr(a, b) {
    console.log(a - b);
    return a + b;
}
console.log(abc(3, 2, 1));


function getMessage() {
    return "Hello, World!";
}

console.log(getMessage());


function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 5));


function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));




function checkSign(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkSign(0));
console.log(checkSign(5));


function findFirstEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            return numbers[i];
        }
    }
    return null;
}

console.log(findFirstEven([1, 3, 5, 8]));
console.log(findFirstEven([1, 3, 5]));




function getOddNumbers(n) {
    let odds = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            odds.push(i);
        }
    }
    return odds;
}

console.log(getOddNumbers(5));
console.log(getOddNumbers(10));




function square(num) {
    return num * num;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);  // 9 + 16 = 25 
}

console.log(sumOfSquares(3, 4));


function numberCategory(num) {
    if (num > 0) {
        if (num % 2 === 0) {
            return "Positive Even";
        } else {
            return "Positive Odd";
        }
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(numberCategory(2));
console.log(numberCategory(-5));



function isAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
}

console.log(isAdult(20));
console.log(isAdult(15));



function double(x) {
    return x * 2;
}

console.log(double(double(2)));   // Nested function call   (double function)



function createPerson(name, age) {
    return {name: name, age: age};
}

console.log(createPerson("Alice", 25));



function greet(name = "Guest") {
    return "Hello, " + name;
}

console.log(greet());
console.log(greet("John"));



function doNothing() {
    return;
}

console.log(doNothing());


function getEvenNumbers(n) {
    let evens = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            continue;  // skips the odd iteration,  added to evens
        } 
        evens.push(i);
    }
    return evens;
}

console.log(getEvenNumbers(6));



let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(4, 6));



function getFirstPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            return numbers[i];
        }
    }
    return -1;
}

console.log(getFirstPositive([-3, -2, 1, 2]));



let multiply = (a, b) => a * b;

console.log(multiply(3, 4));


function logMessage() {
    console.log("Hello!");
}

logMessage();



function findFirstDivisibleBy3(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 3 === 0) {
            return numbers[i];
        }
        i++;
    }
    return -1;
}

console.log(findFirstDivisibleBy3([1, 2, 9, 4]));



function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));




let divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));




function isNegative(num) {
    return num < 0;
}

console.log(isNegative(-5));



let array = [function() { return 1 }, function() { return 2 }];                // unction() { return 1 } returns 1             function() { return 2 } returns 2.                      array[1] accesses the second element of the array, which is the function function() { return 2 }          

console.log(array[1]());



function square(num) {
    return num * num;
}

console.log(typeof square(4));


function runOperation(operation, x, y) {      // x ,y arguments               //operation: A function that defines how to process the numbers.                          x: The first number.y: The second number.

    return operation(x, y);       // 7,2
}

console.log(runOperation((a, b) => a - b, 7, 2));




function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(8));
console.log(checkEvenOrOdd(7));



function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;                             
    }
    return sum;
}

console.log(sumNumbers(5));        // 1+2+3+4+5=15
console.log(sumNumbers(3));        // 1+2+3=6



function countDown(n) {
    let result = "";
    while (n > 0) {
        result += n + " ";
        n--;
    }
    return result;
}

console.log(countDown(5));      // "5 4 3 2 1"
console.log(countDown(3));      // "3 2 1"




function printNumbers(n) {
    let i = 1;
    let result = "";
    do {
        result += i + " ";
        i++;
    } while (i <= n);
    return result;
}

console.log(printNumbers(4));
console.log(printNumbers(2));









