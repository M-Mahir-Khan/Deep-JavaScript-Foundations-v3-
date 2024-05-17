// diferents (==) & (===)
const num = 11;
console.log(num == 11); // true, (==) it's called looseEquality, checks only values is it same or not. 

console.log(num == "11");   // true
console.log(num === "11");  // false,(===) it's called strictEquality, checks values along data types.
// (==) only compares primitives. if the value is non primitive it's gonna turn into a primitive.

let a = -4 == true;
console.log(a); // false

let b = undefined === null;
console.log(b); // false

let c = undefined == null;
console.log(c);  // true

let d = "20" == 20;
console.log(d); // true

let e = "20" === 20
console.log(e); // false

let f = 1 == true;
console.log(f);  // true

let g = 0  === false;
console.log(g); // false

let h = [] == [];
console.log(h); // false

let i = {} == {};
console.log(i); // false

let j = "0" == "-0";
console.log(j);  // false

let k = "" == [{}];
console.log(k); // false

let l = {} == [];
console.log(l); // false

let m = NaN == NaN;
console.log(m); // false

