const hoisting = () => {

    console.log(x) // this will show "undefined" in the console
                    //Incase you accessing before initializing, it will throw referrence error
    var x = 7;

    console.log(getName) ;// this will also print the function evcen before initializing

    function getName () {
        console.log("Hello World!");
    }

    // In case you acces an arrow function before it's initialized
    // Js will throw an error -> arrow functions are stored in the memory as a value
    var getName = () => {
        console.log("Hello World!");
    }

    console.log(getName) ;// this will simply print the function

    return (
        <h1>

        </h1>
    )
}

export default hoisting;

// Hoisting is a phenomenon in which you 
// can access variables without any error even before they're initialized.
// they're defined but not initialized
// even before the code starts executing, memory is allocated to each variable and function
    //so variables will be undefined and functions will be as it is defined