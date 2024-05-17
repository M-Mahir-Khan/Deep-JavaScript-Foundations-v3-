// It's worst method.

// Dynamic Scope doesn't exist practically but theorically it exists.

// I made this instance just for understanding.
var example = 'Suzy'
function fn() {
    example = 'Yong';
    Age = 21;  // There is no variable of Age name but Global is made this variable for us.
    console.log(Age)      // 21
    console.log(example)  // Yong
}
fn();


var a = 'good'
function dynamic() {
    a = "boy"
    Age = 19
    //  console.log(a + Age)
    console.log(Age)  // 19
    console.log(a)    // boy
}
dynamic();


var teacher = "Mahir";
function test() {
    teacher = "Shahid";
    age = 17;
    console.log("Welcome!");
}

console.log(teacher);  // Mahir
// console.log(age);     // not run  because  this is block scope function  and no work outside and only will be inside  work
test();
console.log(age);       // 17
console.log(teacher);   // shahid 
