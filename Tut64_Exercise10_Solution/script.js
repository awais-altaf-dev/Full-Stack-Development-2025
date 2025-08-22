let rand = Math.random();
let first, second, third;
//lets generate the first word
if (rand < 0.33) {
    first = "Crazy";

}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing";

}
else {
    first = "Fire";
}

//lets generate the second word
rand = Math.random();
if (rand < 0.33) {
    second = "Engine";

}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";

}
else {
    second = "Garments";
}

//lets generate the third word
rand = Math.random();
if (rand < 0.33) {
    third = "bros";

}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";

}
else {
    third = "Hub";
}
console.log(`${first} ${second} ${third}`);
