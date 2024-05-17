// Negative Zero
// Object.is => use to stricktly equallity check 

console.log(0 == -0);     // true 
console.log(0 === -0);    // true
//   0 = 0;
//  -0 = -0
console.log(Object.is(0, -0));  // false 
console.log(Object.is(0, 0));   // true 
console.log(Object.is(-0, -0)); // true

// tests ==>
console.log(Object.is(42,42) === true);                    // true 
console.log(Object.is("foo","foo") === true);              // true 
console.log(Object.is(false,false) === true);              // true
console.log(Object.is(null,null) === true);                // true
console.log(Object.is(undefined,undefined) === true);      // true
console.log(Object.is(NaN,NaN) === true);                  // true
console.log(Object.is(-0,-0) === true);                    // true
console.log(Object.is(0,0) === true);                      // true

console.log(Object.is(-0,0) === false);                    // true
console.log(Object.is(0,-0) === false);                    // true
console.log(Object.is(0,NaN) === false);                   // true
console.log(Object.is(NaN,0) === false);                   // true
console.log(Object.is("42",42) === false);                 // true
console.log(Object.is(42,"42") === false);                 // true
console.log(Object.is(false,true) === false);              // true
console.log(Object.is(null,undefined) === false);          // true
console.log(Object.is(undefined,null) === false);          // true


// Math.sign => check to positive value return 1 and nagative value return -1
console.log(Math.sign(3));   // 1
console.log(Math.sign(-3));  //-1
console.log(Math.sign(-1));  //-1
console.log(Math.sign(1));   // 1

console.log(Math.sign(-0));   //-0
console.log(Math.sign(0));    // 1
