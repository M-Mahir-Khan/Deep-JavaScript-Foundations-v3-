var global = "Suzy";

function parent(){
    var child = "'Kyle";
    inner()

    function inner(){
        var child2 = "Simson";

        inner2()
        function inner2(){
            var child3  = "Eina";
            console.log(`${child} ${child2}${child3}`);
        }
    }
}

parent();