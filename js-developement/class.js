//ES6 > JS Class
class Employee {
    id; //Property
    name; //Property

    //Constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    //Function 
    getDetails() {
        console.log(`Employee Id , ${this.id} and Name ${this.name}`);
    }
}

let emp1 = new Employee(101, "Little Finger");
let emp2 = new Employee(102, "Cerci");

emp1.getDetails();
emp2.getDetails();
