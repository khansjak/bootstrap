//Function Constructor :> Any function v=can be a fucntion constructor. 
//Is used to create dynamic objects of same type.

let user ={
    name:"Mario",
    age:30,
    isMarried:true,
    address:"Mario Street"
}

console.log(user);
console.log(user.name,user.age);

//blueprint for fucntion constructor 
function User(name,age,isMarried,address){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.address = address;

}

let user1 = new User("Mario",23,true,"Mario Street");
console.log(user1);
let user2 = new User("Super Mario", 23, true, "Super Mario Street");
console.log(user2);