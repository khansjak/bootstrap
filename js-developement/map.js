let map = userMap = new Map();
userMap.set("firstName","Robb ");
userMap.set("lastName","Stark");
userMap.set(1,"Rank");
userMap.set([],"Nothing there !");

console.log(userMap.get("firstName"));
console.log(userMap.get(1));
console.log(userMap.get(Object));
console.log(userMap.delete(Object));