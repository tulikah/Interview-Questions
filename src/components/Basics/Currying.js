const Currying = () => {

    const multiplyFunc = function(x, y){
        // console.log(x*y);
    }

    const multiplyBy2 = multiplyFunc.bind(this, 2);
    multiplyBy2(5)
    const multiplyBy3 = multiplyFunc.bind(this);
    multiplyBy3(5, 3)

    let multiplyClosure = function(x){
        return function(y){
            // console.log(x*y);
        }
    }
    let multiply = multiplyClosure(4);
    multiply(5);

    return (
        <h1>{multiplyBy2}</h1>
    )
}

function sum(a){
    return function(b){
        return function(c) {
            return a+b+c
        }

    }
}
console.log(sum(2)(6)(1));
function evaluation(operation) {
    return function (a) {
        return function (b) {
            return function (c) {
                if(operation === 'sum') return a + b + c
                else if(operation === 'multiply') return a * b * c
                else if(operation === 'divide') return a / b / c
                else return a - b - c
            }
        }
    }
}
const evals = evaluation('sum')(1)(2)(3);
console.log(evals);

function infinte(a) {
    return function (b) {
        if(b) return infinte(a + b)
        return a;
    }
}
console.log(infinte(2)(3)(20)())

export default Currying;
