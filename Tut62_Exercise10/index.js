// function business(a,b,c){
//     console.log(a,b,c);
// }
// business("Crazy","Engine", "Limited" );
// business("Amazing","Garments","Bros" );
// business("Fire","Foods","Hub");




// Define variables for each section
let a1 = "Crazy";
let a2 = "Amazing";
let a3 = "Fire";
let b1 = "Engine";
let b2 = "Garments";
let b3 = "Foods";
let c1 = "Limited";
let c2 = "Bros";
let c3 = "Hub";

// Track used combinations
let previousCombination = "";

// Function to generate a random business name
function generateRandomName() {
    let a, b, c;
    let currentCombination;

    do {
        // Randomly pick one value from each section
        a = Math.random() < 0.33 ? a1 : Math.random() < 0.5 ? a2 : a3;
        b = Math.random() < 0.33 ? b1 : Math.random() < 0.5 ? b2 : b3;
        c = Math.random() < 0.33 ? c1 : Math.random() < 0.5 ? c2 : c3;

        // Combine the selected words
        currentCombination = a + " " + b + " " + c;
    } while (currentCombination === previousCombination); // Ensure it's not the same as the previous one

    // Update the previous combination
    previousCombination = currentCombination;

    // Return the generated name
    return currentCombination;
}

// Generate and display random business names
console.log("Generated Business Names:");
console.log(generateRandomName());
console.log(generateRandomName());
console.log(generateRandomName());