console.log("Statement 1");
console.log("Statement 2");
setTimeout(function () {
    console.log("Statement 3");
}, 2000);

console.log("Statement 4");
console.log("Statement 5");

//Calculator 
//When not using callback 

let calculate = function (num1, num2, operation) {
    if (operation == "add") {
        return num1 + num2;
    }
    if (operation == "sub") {
        return num1 + num2;
    }
    if (operation == "add") {
        return num1 - num2;
    }
    if (operation == "mul") {
        return num1 * num2;
    }
    if (operation == "div") {
        return num1 / num2;
    }
}

console.log(calculate(3, 5, "add"));

//Callback now 
//callback is a function passed as an argument to another function in a hope that it will get executed at certain time

let add = function (a, b) {
    return a + b;
}

let sub = function (a, b) {
    return a - b;
}

let mul = function (a, b) {
    return a * b;
}

let div = function (a, b) {
    return a / b;
}


let calculator = function (num1, num2, callback) {
    //var num1 = 100;
    //var num2 = 20;
    let response = callback(num1, num2);
    console.log(response);
}

calculator(100, 20, add);
calculator(100, 20, sub);
calculator(100, 20, mul);
calculator(100, 20, div);