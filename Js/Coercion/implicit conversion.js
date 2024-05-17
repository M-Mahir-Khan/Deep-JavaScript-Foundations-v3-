// Exmple 1 : Impilicit Conversion to String 
// numeric string used with + gives string type

let result;
result = "3" + 1;
console.log(result);

result = "3" + true;
console.log(result);

result = "3" + undefined;
console.log(result);


// Example 2: Implicit Conversion to Number
// numeric string used with - , / , * results number type

let res;
res = "4" + "4"
console.log(res);   //44
console.log(typeof res);


res = "4" * "2";
console.log(res);   // 8
console.log(typeof res);

res = "4" -2;
console.log(res);   // 2
console.log(typeof res);

res = "4" * 2;
console.log(res);   // 8

res = "4" / 2;
console.log(res);   // 2

// Exmple 1 : Impilicit Conversion to String 
//  numeric string used with + gives string type


let res2;
res2 = "hello" - "hello";
console.log(res2);  // NaN

res2 = "4" - "hii";
console.log(res2);  // NaN

// Example 5: null Conversion to Number
// null is 0 when used with number
let nl;

nl = 4 + null;
console.log(nl);  // 4

nl = 4 - null;
console.log(nl);  // 4

nl = 2 * null;
console.log(nl);  // 0

// Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

let res3;

res3 = 4 + undefined;
console.log(res3);  // NaN

res3 = 4 - undefined;
console.log(res3);  // NaN

res3 = true + undefined;
console.log(res3);  // NaN

res3 = null + undefined;
console.log(res3);  // NaN

res3 = 4 + null;
console.log(res3);  // 4

res3 = null + null;
console.log(res3);  // 0