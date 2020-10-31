let outerCount = 10;
function counter() {
    let innerCount =890;
    function add() { //Ths add function called as closure 
        let totalCount = outerCount + innerCount;
        return totalCount;
    }
    return add();
}
console.log(counter());
