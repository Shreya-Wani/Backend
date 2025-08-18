//1. named export

exports.myAddFnction = function add(a, b){
    return a+b;
}

exports.subtract = function sub(a, b){
    return a-b;
}

exports.multiplication = function mul(a, b){
    return a*b;
}

exports.division = function div(a, b){
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}      


//2. default export

module.exports = function () {
    console.log("This is the default export function.");
}
