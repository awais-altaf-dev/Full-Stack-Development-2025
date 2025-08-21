// Original Array
let arr = [1, 5, 6, 7, 8, 9];

// ------------------ MAP ------------------
// Square each element of the array using map()
let newArr = arr.map((e) => {
    return e ** 2;   // e ** 2 means "e squared"
});
console.log("Squares using map:", newArr);

// ------------------ FILTER ------------------
// Function to check if a number is greater than 5
const greaterThanFive = (value) => {
    return value > 5;  // Returns true only if value > 5
};

// Filter elements greater than 5
console.log("Numbers greater than 5:", arr.filter(greaterThanFive));

// ------------------ REDUCE ------------------
// Another array for reduce example
let arr2 = [1, 2, 3, 4, 5];

// Function for multiplication of array elements
const multiply = (a, b) => {
    return a * b;
};

// Reduce will multiply all elements together (factorial-like result)
console.log("Product of arr2 elements:", arr2.reduce(multiply));

// ------------------ ARRAY.FROM ------------------
// Convert a string into an array of characters
let a = "Muhammad Awais Altaf";
console.log("String converted to array:", Array.from(a));
