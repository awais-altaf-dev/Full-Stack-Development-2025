// ------------------ ARRAYS ------------------
let arr = [1, 2, 3, 4, 5];
let arr2 = [10, 3, 4];
let arr3 = [8, 7, 6, 5, 4, 10];

// Log array
console.log("Original arr:", arr);

// Length of array
console.log("Length:", arr.length);

// Access element
console.log("First element:", arr[0]);

// Update element
arr[0] = 10;
console.log("Updated arr:", arr);

// Convert array to string
console.log("toString():", arr.toString());

// Join elements with a separator
console.log("join('-'):", arr.join('-'));

// ------------------ ADD & REMOVE ------------------

// Remove last element
console.log("pop() -> Removed last element:", arr.pop());

// Add element at the end
arr.push("Muhammad Awais Altaf");
console.log("push() -> Added name at end:", arr);

// Remove first element
console.log("shift() -> Removed first element:", arr.shift());

// Add element at the start
arr.unshift("Muhammad Awais Altaf");
console.log("unshift() -> Added name at start:", arr);

// Delete element (leaves empty slot, does NOT shift)
delete arr[2];
console.log("delete index 2:", arr);

// ------------------ COMBINE & SORT ------------------

// Concatenate arrays
console.log("concat(arr, arr2):", arr.concat(arr2));

// Sort (alphabetical by default, numbers may need compare function)
console.log("arr2 sorted:", arr2.sort());

// Reverse array
console.log("arr2 reversed:", arr2.reverse());

// ------------------ SPLICE & SLICE ------------------

// splice(start, deleteCount) -> removes & returns elements
console.log("splice(1,2) removed:", arr3.splice(1, 2));
console.log("arr3 after splice:", arr3);

// slice(start, end) -> returns new array without modifying original
console.log("slice(1,2):", arr3.slice(1, 2));
console.log("arr3 after slice (unchanged):", arr3);
