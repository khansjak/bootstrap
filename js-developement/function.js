//declare function 
function greeting() {
    //Code to be excecuted
    console.log("The programming gods are pleased")
}

//2. Function invocation 
greeting();

function showMessage(name) {
    console.log("The message for greeter good is given by ! ", name);
}

showMessage("Mario");
showMessage("Luigi");
showMessage("Mudhorn");


function calculateAge(name, yearOfBirth ) {
    if (name && yearOfBirth && typeof name == "string" && typeof yearOfBirth == "number") {
        console.log(`Hi ${name} , Your age is , ${2020 - yearOfBirth}`);
    } else {
        console.log("Please provide the data !");
    }
}

calculateAge("Mando", 1990);

