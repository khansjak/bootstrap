let showMessage=(function (username) {
    console.log(`Hi ${username}`);
})

showMessage("Super Mario");

let showMessage2 = (username)=>{
    console.log(`Hi , ${username}`);
}

showMessage("Super Luigi");

let makeFullName= (firstName,lastName,callback)=>{
    return callback(firstName,lastName);
}

_generate= (a,b)=>{
    return a + " "+b;
}
let res = makeFullName("Super", "Mario", _generate);
console.log(res);