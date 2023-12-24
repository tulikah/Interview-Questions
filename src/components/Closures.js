

const Closures = () => {

    for(var i=0; i<3; i++) {
        function inner() {    // ====> this is a closure
            setTimeout(() => {
                console.log(i);
            },i * 1000)
        }
        console.log(i);
    }


    return(

        <h1>Memoization Example</h1>
    )
}

export default Closures;