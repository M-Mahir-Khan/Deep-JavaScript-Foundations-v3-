// NaN => Everyone say that NaN means (not a number) but it's totally wrong. NaN indicates an invalid number.
// For Example.

let myAge = Number("0o46"); // 38
const myNextAge = Number("39"); // 39
let myCatAge = Number("n/a"); // NaN
myAge = "My son Age"; // NaN
// NaN's are not equal to each other

myCatAge === myCatAge; // false

// isNaN method is check the value NaN or not. If value is NaN it returnes true otherwise false
console.log(isNaN(myAge)) // false
console.log(isNaN(myCatsAge)) // true
console.log(isNaN(myAge)) // false