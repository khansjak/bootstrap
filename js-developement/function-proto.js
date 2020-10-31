function GOTUser(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;


}


let user = new GOTUser("John","Snow",38,"The Wall");
//GOTUser.prototype.nationality("Indian");
GOTUser.prototype.calculateAge=function (yearOfBirth) {
    console.log(`Hi user ${this.firstName} with age ${this.age}`);
}
//user.nationality = "Indian";
console.log(user);