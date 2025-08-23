// function appreciate(name){
//     console.log("I appreciate you,"+name+".")
//     console.log("Hey "+name+", keep up the great work!")
//     console.log("Your efforts are making a difference, "+name+".")
// }
// appreciate("Waleed")
// appreciate("Marwat")
// appreciate("Muhammad Awais Altaf")

function numbers(num1, num2, c = 1) {
    return num1 + num2 + c;

}
result1 = numbers(5, 10);
result2 = numbers(20, 30,2);

console.log("The sum of two numbers is " + result1)
console.log("The sum of two numbers is " + result2)

const func1=(x)=>{
    console.log(x+" is the value of arrow function!")
}
func1(2);
func1(4);