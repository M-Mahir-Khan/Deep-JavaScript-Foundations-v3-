console.log(Number(""));           // 0
console.log(Number('\t\n'));       // 0
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN
console.log(Number([]));           // 0
console.log(Number([1,2,3]));      // NaN
console.log(Number([null]));       // 0
console.log(Number([undefined]));  // 0
console.log(Number({}));           // NaN
console.log(Number({a:10}))        // NaN

// String Corner Coses
console.log(String(-0));          // '0'
console.log(String(null));        // 'null'
console.log(String(undefined));   // 'undefined'
console.log(String([null]));      // ''
console.log(String([undefined])); // ''



// On an Object
console.log( Boolean(new Boolean(false))) // true, we can dont give primitive value on a boolean object we just ask is it on falsy list or not;


console.log(Number(typeof(typeof(typeof 0)))) //NaN
console.log(Symbol(typeof Symbol(undefined))) //symbol(symbol)
console.log(typeof Math.floor())    // number
console.log(typeof(Number(typeof(typeof String())))); // number
console.log(typeof(Boolean(typeof(typeof "hello")))) // boolean
var typeOf = String()
var typeOf2 = typeOf
var typeOf3 = Boolean(typeOf2)
var typeOf4 = typeof typeOf3
console.log(typeof typeOf4) // string
console.log(undefined) // undifined
console.log(typeof Boolean(3-2)) // boolean

var num = -0
console.log(num.toString()); // 0

