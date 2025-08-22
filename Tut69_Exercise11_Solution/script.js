// Define a variable 'a' with value 7
let a = 7  

// Function to calculate factorial using Array methods
function factorial(number){    
    // Create an array from 0 to number (inclusive)
    // Example: if number = 7 => arr = [0,1,2,3,4,5,6,7]
    let arr = Array.from(Array(number + 1).keys())  
    
    // Remove the first element (0) because multiplying by 0 will make result 0
    // Now arr = [1,2,3,4,5,6,7]
    
    // Multiply all elements using reduce method
    // reduce((a,b) => a*b) means: start with first element, multiply with next one, and keep going
    let c = arr.slice(1).reduce((a, b) => a * b)  
    
    // Return the final multiplication result
    return c 
}   

// Function to calculate factorial using for loop
function facFor(number){     
    let fac = 1; // Start with 1 because factorial is a multiplication process
    
    // Loop from 1 to 'number'
    for (let index = 1; index <= number; index++) {         
        fac = fac * index  // Multiply 'fac' with current index
    }     
    
    return fac  // Return the final result
} 

// Print results of both functions
console.log(factorial(a))  // Output for Array method
console.log(facFor(a))     // Output for loop method
