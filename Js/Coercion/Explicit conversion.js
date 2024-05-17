// JavaScript Explicit Conversion
// 1 => Convert to Number Explicitly

// String to Number
let result;

result = Number("120");
console.log(result);    // 120

result = Number("240e -1");
console.log(result);    // 24

// Boolean to number

result = Number(true);
console.log(result);    // 1

result = Number(false);
console.log(result);    // 0

result = Number(NaN);
console.log(result);    // NaN

result = Number('');
console.log(result);    // 0


result = Number(undefined)  
console.log(result);    // undefind

// Convert to Math Methods

result = parseInt('20.01');
console.log(result);    // 20

result = parseFloat('20.01');
console.log(result);    // 20.01

result = +'20.01';
console.log(result);    // 20.01

result = Math.floor('20.01');
console.log(result);    // 20

// 3. Convert to Boolean Explicitly
result = Boolean('');
console.log(result); // false

result = Boolean(" ");
console.log(result); // true

result = Boolean(` `);
console.log(result); // true

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

result = Boolean({});
console.log(result); // true

result = Boolean([]);
console.log(result); // true

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true


