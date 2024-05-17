// double equal corner cases 
console.log([] == []);  // arr == arr not equal to memory address
console.log([] == ![]); // true

console.log([] == false);   // true
console.log("" == false);   // true
console.log(0 == false);    // true
console.log(0 == 0);        // true

console.log("" == 0);      // true
console.log(1 == true);    // true
console.log("" == []);     // true
console.log([] == {});     // false
console.log("" == {});     // false
console.log("" == !{});    // true
console.log({} == {});     // false
