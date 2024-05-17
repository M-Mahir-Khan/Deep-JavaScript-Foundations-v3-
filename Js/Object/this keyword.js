function ask(question){
    console.log(this.teacer,question);// In (this) keyword its not matter where i call it from its matter how i call it
}

function otherClass(){
    var mycontext = {
        teacer: "Suzy"
    } // Explicit Binding because of call method.
    ask.call(mycontext,"Why")  // In Mycontxt there is a variable and thats gonna be add into ask function bcz i sent it in ask function using call.
}

otherClass()