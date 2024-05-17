console.log(Number(""));            // 0
console.log(Number("\t\n"));        // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN
console.log(Number([]));            // 0
console.log(Number([1,2,3]));       // NaN
console.log(Number([null]));        // 0
console.log(Number([undefined]));   // 0
console.log(Number({}));            // NaN
console.log(Number({a:10}));        // NaN

// String corner cases
console.log(String(-0));            // "0"
console.log(String(null));          // "null"
console.log(String(undefined));     // "undefind"
console.log(String([null]));        // ""
console.log(String([undefined]));   // ""

// On an Object
console.log( Boolean(new Boolean(false))) // true, we can dont give primitive value on a boolean object we just ask is it on falsy list or not;

