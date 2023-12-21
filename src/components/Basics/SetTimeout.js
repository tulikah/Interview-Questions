function SetTimeout() {

    for(var i=0; i<3; i++) {
        setTimeout(() => {
            console.log(i);
        },i * 1000)
    }

    //if you want to print series without changing var, use closures:

    for(var i=0; i<3; i++) {
        function inner() {
            setTimeout(() => {
                console.log(i);
            },i * 1000)
        }
        console.log(i);
    }

return (
    <h1>
        SetTimeout with let, const, var
    </h1>
)
}

//Result is 3 (3 times) becoz of 'var'. var has functional scope and the 
//setTimeout only runs after the times ends. So techncially when i has reference to 3
// it does not go in the loop and the timer ends so the current value of i is diplayed.
//Update i to 'let' to see the output -> 0 1 2

export default SetTimeout;