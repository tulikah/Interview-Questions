
//IMP RULE:
//*** The number of arguments should be equal to the length of the function *****/ 



const Currying = () => {

    const multiplyFunc = function (x, y) {
        // console.log(x*y);
    }

    const multiplyBy2 = multiplyFunc.bind(this, 2);
    multiplyBy2(5)
    const multiplyBy3 = multiplyFunc.bind(this);
    multiplyBy3(5, 3)

    let multiplyClosure = function (x) {
        return function (y) {
            // console.log(x*y);
        }
    }
    let multiply = multiplyClosure(4);
    multiply(5);

    return (
        <h1>{ multiplyBy2 }</h1>
    )
}

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }

    }
}
console.log(sum(2)(6)(1));


function evaluation(operation) {
    return function (a) {
        return function (b) {
            return function (c) {
                if (operation === 'sum') return a + b + c
                else if (operation === 'multiply') return a * b * c
                else if (operation === 'divide') return a / b / c
                else return a - b - c
            }
        }
    }
}
const evals = evaluation('sum')(1)(2)(3);
console.log(evals);

function curry1(...args) {
    let storage = [...args];
    if (storage.length === 0) return 0;
    return function (...args2) {
        storage.push(...args2)
        return storage.reduce((acc, curr) => acc + curr, 0);
    }
};


// let total = curry(1)(2)(3)(4)();
// console.log(total);
// console.log(total(2)(3)(20)())


//Placeholder example:

//Two requirements:
// 1. the length of the args is not more than the length of the function
// 2. Replace the placeholder

function curry(func) {
    return function curried(...args) {
        let totalArgs = args.slice(0, func.length);
        const placeHolder = totalArgs.some(arg => arg === curry.placeHolder); //true or false
        if(!placeHolder && totalArgs.length === func.length) { // args: curry(1,2)(3), length = 2
            return func.apply(this, totalArgs);
        }

        return function (...nextArgs) {
            return curried.apply(this, mergeArgs(args, nextArgs));
        }
    }
}

function mergeArgs(args, nextArgs) {
    let result =[];
    args.forEach((arg, idx) => {
        if(arg === curry.placeHolder){
            result.push(nextArgs.shift());
        } else {
            result.push(arg);
        }
    })

    return [...args, ...nextArgs];
}

const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
}
 
const curriedJoin = curry(join)
const _ = curry.placeholder
 
curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(_, _, _)(1)(_, 3)(2)
// // 1 gets placed at 1st placeholder
// curriedJoin(1, _, _)(_, 3)(2)
// // 3 gets placed at the 2nd placeholder
// curriedJoin(1, _, 3)(2)
// // 2 gets placed at the 1st placeholder
// curriedJoin(1, 2, 3) // '1_2_3'


export default Currying;
