// Alert to test if the script is working
alert("Hello, World!");

// DOM Traversal Notes and Examples:

// Accessing the body of the document
// document.body
// <body>​…​</body>​<div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​</div>​<script src=​"script.js">​</script>​</body>​

// Accessing child nodes of the body
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]

// Accessing the first child node of the body
// document.body.childNodes[0]
// #text (represents whitespace or text content)

// Accessing child nodes of the first <div class="container">
// document.body.childNodes[1].childNodes
// NodeList(7) [text, div.box, text, div.box, text, div.box, text]

// Assigning the container div to a variable
let cont = document.body.childNodes[1]; // <div class="container">...</div>

// Accessing the first and last child nodes of the container
// cont.firstChild
// #text (represents whitespace or text content)

// cont.lastChild
// #text (represents whitespace or text content)

// Accessing the first element child of the container
// cont.firstElementChild
// <div class="box">Box1</div>

// Changing the background color of the first box
cont.firstElementChild.style.backgroundColor = "red"; // Sets background color to red

// Accessing the parent element of the first box
// cont.firstElementChild.parentElement
// <div class="container">...</div>

// Accessing child nodes of the first box
// cont.firstElementChild.childNodes
// NodeList [text] (contains only text content)

// Accessing children of the first box (should be empty as there are no child elements)
// cont.firstElementChild.children
// HTMLCollection []

// Attempting to access a non-existent child element (results in an error)
// cont.firstElementChild.children[3]; // Uncaught TypeError: Cannot read properties of undefined

// Correcting typos in method names
// Note: The correct property is `children`, not `childern`.
// cont.firstElementChild.children[2]; // This would also throw an error as there are no children.