// Module is used to design pattern and used to wrap a set of variables and functions together in one scope.
// It's used to define object which is accessed variables and functions from outer scope.

function employes(){
    var name = "Mayank";
    var age = 30;
    var deesignation = "Developer";
    var Salary = 50000;

    return {
        name: name,
        age : age,
        deesignation: deesignation,
        Salary: Salary
    }
}

const details = new employes();
console.log(details);