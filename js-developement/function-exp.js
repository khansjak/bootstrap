
//Simple function declaration 
function greet(username) {
    console.log("Today is a good day !",username);
}
greet("Queen");

//2 function expression 
let message = function (name) {
    console.log(`Tommorow is best day !`, name);
}

let message2 = function (name,age) {
    console.log(`Hi you are ${name} with age ${age}`);
}

message("John");
message2("Snow",23);

