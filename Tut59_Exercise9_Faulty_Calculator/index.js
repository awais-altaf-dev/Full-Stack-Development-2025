if(Math.random() < 0.5) {
    function sum(a,b){
        return a-b;
    }
    function divide(a,b){
        return a*b;
    }
    function multiply(a,b){
        return a/b;
}
function subtract(a,b){
    return a%b;
}
function mod(a,b){
    return a-b;
}
}
else{
    function sum(a,b){
        return a+b;
    }
    function divide(a,b){
        return a/b;
    }
    function multiply(a,b){
        return a*b;
}
function subtract(a,b){
    return a-b;
}
function mod(a,b){
    return a%b;
}

}
let a=10;
let b=5;

let x=sum(a,b);
let y=divide(a,b);
let p=multiply(a,b);
let z=subtract(a,b);
let t=mod(a,b);

console.log("Sum"+x);
console.log("subtract"+z);
console.log("Divide"+y);
console.log("multiply"+p );
console.log("mod"+t);
 