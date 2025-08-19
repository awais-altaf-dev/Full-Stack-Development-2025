alert("testing Popup! Click ok to Close!");
console.log("Testing Console!")
console.log("Something Happens!")
var a=prompt("Enter The any value:")
console.log("User entered: " + a)
var isTrue=confirm("Are you sure to leave the page or not?")
if(isTrue){
    console.log("User chose to leave the page.")
}
else{
    console.log("User chose to stay on the page.")
}
document.title="Muhammad Awais Altaf"
document.body.style.backgroundColor="lightblue";