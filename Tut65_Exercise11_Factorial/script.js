// let num=prompt("Enter the number:");
// let num=5;
// let num = parseInt(prompt("Enter the number:")); // Take input from the user and convert it to an integer
// function factorial(num){
//     if(num==0){
//         return 1;
//     }
//     return num*factorial(num-1);

// }
// console.log(factorial(num));



//Take input from the user (2nd Method)


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number: ", (input) => {
    let num = parseInt(input); // Convert the input to an integer

    function factorial(num) {
        if (num == 0) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    console.log(`The factorial of ${num} is ${factorial(num)}`);
    rl.close(); // Close the readline interface
});