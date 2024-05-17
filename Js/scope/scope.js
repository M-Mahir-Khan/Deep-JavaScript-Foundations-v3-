// Global scope

var a = 'Name';
function fn(){
    let b = "Mahir";
    console.log(a); // "Name"
    console.log(b); // "Mahir"
}
// console.log(b); // ReferenceError: b is not defined
fn();

// Module scope

{
    let a = "Hello from Module Scope"
    console.log(a);
}

// Block scope

function myFunc(){
    if(true){
        let x =  29;    // x block scope mein hai
        console.log(x); // yeh sahi tareeke se kaam karega
    }
    console.log(x); // yeh error dega, kyun ki x block scope ke bahar hai
}


// Function-Scope

function fn() {
    var a = 'hii from function scope';
    console.log(a);
}
fn();

// Lexicla scope
// This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function cannot be check inner function values.

var k = "Hii "
function fn1(){
    var l = "MY "
    fn2()
    function fn2(){
        var m = "Name "
        fn3()
        function fn3(){
            var n = "is "
            fn4()
            function fn4(){
                var o = "Mahir"
                console.log(k + l + m + n + o);
            }
        }
    }
}
fn1()