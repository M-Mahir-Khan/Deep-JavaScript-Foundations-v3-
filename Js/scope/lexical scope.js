var a = 'Hello guys ';
// This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function cannot be check inner function values.

function first() {
    var b = 'How are you ';
    second();

    function second() {
        var c = 'MySelf ';
        three();

        function three() {
            var d = 'Mahir ';
            four();

            function four() {
                var e = 'khan ';
                console.log(a + b + c + d + e)

            }
        }
    }
}
first(); // execution of function first().


var a = 'Hello'

function fn() {
    var b = 'my'
    fn1()
    function fn1() {
        var c = 'Name'
        fn2()
        function fn2() {
            var d = "is"
            fn3()
            function fn3() {
                var e = "Mohammed"
                fn4()
                function fn4() {
                    var f = "Mahir"
                    console.log(a + " " + b + " " + c + " " + d + " " + e + f)
                }
            }
        }
    }
}
fn();


