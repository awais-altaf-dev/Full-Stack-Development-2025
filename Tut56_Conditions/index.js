console.log("So this is about Conditional by Muhammad Awais Altaf! Happy learning")
var a = 10;
var b = 5;
let age=17;
let grace=3;
age+=grace;
console.log(age);
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age%grace);
console.log(age**grace); // exponentiation operator

// Conditional Statements
if(age>18){
    console.log("You are eligible to vote.");

}
else{
    console.log("You are not eligible to vote.");
}
//Ternary Operator
var c=a>b?(a-b):(b-a);
console.log(c);
// Switch Statement
switch (age) {
    case 18:
        console.log("You just became eligible to vote.");
        break;
    case 19:
        console.log("You are still eligible to vote.");
        break;
    default:
        console.log("You are not eligible to vote.");
}