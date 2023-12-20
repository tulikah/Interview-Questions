const Currying = () => {

    const multiplyFunc = function(x, y){
        console.log(x*y);
    }

    const multiplyBy2 = multiplyFunc.bind(this, 2);
    multiplyBy2(5)
    const multiplyBy3 = multiplyFunc.bind(this);
    multiplyBy3(5, 3)

    let multiplyClosure = function(x){
        return function(y){
            console.log(x*y);
        }
    }
    let multiply = multiplyClosure(4);
    multiply(5);

    return (
        <h1>{multiplyBy2}</h1>
    )
}

export default Currying;
