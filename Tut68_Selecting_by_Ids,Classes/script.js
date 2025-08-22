console.log("This is tut 68");

// --------------------
// 1. Access elements by CLASS NAME
// --------------------
let boxes = document.getElementsByClassName("box");
console.log(boxes);  // HTMLCollection of all elements with class "box"

// Example: Change background of second box (index starts from 0)
boxes[1].style.background = "yellow";


// --------------------
// 2. Access element by ID
// --------------------
document.getElementById("yellowbox").style.background = "yellow";
// The above will overwrite the previous style on Box 2 (still yellow)


// --------------------
// 3. Access first element by querySelector (works like CSS selectors)
// --------------------
document.querySelector(".box").style.background = "blue";
// This changes the FIRST element with class "box" to blue (Box 1)


// --------------------
// 4. Access multiple elements using querySelectorAll
// --------------------
document.querySelectorAll(".box")[2].style.background = "green";
// This targets the 3rd box (index 2) and makes it green


// --------------------
// 5. Loop through all selected elements using forEach
// --------------------
document.querySelectorAll(".box").forEach(e => {
    e.style.border = "3px solid red"; // Example: Add red border to all boxes
});


// --------------------
// 6. Access elements by TAG NAME
// --------------------
document.getElementsByTagName("div")[4].style.background = "orange";
// Here, index 4 means the 5th <div> on the page (Box 4)


// --------------------
// 7. Using closest()
// --------------------
// closest() finds the nearest ancestor (including the element itself) that matches the selector
let checkClosest = document.getElementsByTagName("div")[2].closest("#yellowbox");
console.log(checkClosest); // null because Box 3 is NOT inside #yellowbox


// --------------------
// 8. Using contains()
// --------------------
// contains() checks if one node is inside another
let container = document.querySelector(".container");
let firstBox = document.querySelector(".box");
let result = container.contains(firstBox); // true because firstBox is inside container
console.log(result);
