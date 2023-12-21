const CompositeFuncs = function(...functions) {
    //the argument passed in result - args
    return function(args){ 
        // Passing product of previous func to the next func, with initial value as args - 5
        return functions.reduceRight((sum, currFunc) => currFunc(sum), args) 
        //reduceRight is for composite functions
        //reduceLeft is for Pipes
    }

}

function funcA(a) { 
    return a*2;
}
function funcB(a) {
    return a*2;
}
function funcC(a) {
    return a*2;
}


let result = CompositeFuncs(funcA, funcB, funcC);
console.log(result(5));

export default CompositeFuncs;
