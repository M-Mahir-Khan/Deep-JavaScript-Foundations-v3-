// Coercion ==> Implicit Coercion, Explicit Corersion

// Exlicit Coercion
// Exlicit Coercion => convert to DataType use predifine function 

let a = 20;
console.log(String(a));  //"10"

let b = String(40);
console.log(b); // "40"

let c =  Number("50");
let d =  c + 10;
console.log(d); // 60;


// Implicit Coercion
// Implicit Coercion => convert to DataType not use predifine function use to logic

let e = 10;
let f =  e + "";
console.log(f); // "10"
