// ------------------ FOR LOOP ------------------
// Using traditional for loop to iterate through array
let a = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < a.length; i++) {
    console.log("For Loop:", a[i]);
}

// ------------------ FOREACH ------------------
// forEach gives value, index, and the whole array
a.forEach((value, index, array) => {
    console.log("ForEach -> Value:", value, "Index:", index, "Array:", array);
});

// ------------------ FOR...IN (Objects) ------------------
// Looping through keys of an object
let object = {
    a: 5,
    b: 10,
    c: 15
};

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key]; // Get value by key
        console.log("For...in -> Key:", key, "Value:", element);
    }
}

// ------------------ FOR...OF ------------------
// Looping directly over array values (no index)
for (const value of a) {
    console.log("For...of -> Value:", value);
}
