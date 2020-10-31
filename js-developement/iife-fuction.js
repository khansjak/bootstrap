
const empId= (function name(params) {
    let count = 0;
    count ++;
    return function(){
        count++;
        return `empId: ${count}`
    };
})();

console.log(empId());
console.log(empId());
console.log(empId());
console.log(empId());