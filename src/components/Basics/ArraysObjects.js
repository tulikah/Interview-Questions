import React from 'react'

const ArraysObjects = () => {

    const nums = [1,2,3,4];


    Array.prototype.myFilter = function(func) {
        let result = [];
        for(let i=0; i<this.length; i++) {
            if(func(this[i], i, this))
            result.push(this[i])
        }
        return result;
    }

    const filter = nums.myFilter((elem, idx, nums) => {
        return elem % 2 === 0;
    })

    // console.log(filter);

    Array.prototype.myMap = function(cb){
        let temp = [];
        for(let i=0;i<this.length;i++) {
            temp.push(cb(this[i], i, this));
        }
        return temp;
    }
    const sum = nums.myMap((n) => { return n + 2 });
    // console.log('sum' ,sum);

    Array.prototype.myReduce = function(cb, initialValue) {
        let accumulator= initialValue;
        let startingValue;

        //Edge Cases

        if(initialValue === undefined && this.length === 0) throw 'No initial value and array'

        if(initialValue !== undefined) {
            accumulator = initialValue;
            startingValue = 0;
        } else {
            accumulator = this[0];
            startingValue = 1;
        }

        for (let index = 0; index < this.length; index++) {
           if(Object.hasOwn(this, i)) {
            accumulator = cb(accumulator, this[index], index, this)     
           }
        }
        return accumulator;
    }

    const reduceSum = nums.reduce((acc, curr) => { return acc += curr}, 0);
    console.log('sum' ,reduceSum);

    //Sort function

    return (
        <div>
            Arrays and objects
            - Array destructuring 
            - Object Destructuring
            - Rest Operator
            - Spread Operartor
            - Map
            - Filter
            - Reduce
        </div>
    )
}

export default ArraysObjects

// {

// describe('Test-cases for reduce', () => {
//     test('Two values', () => {
//         expect([2, 9].myReduce(add ,9).toEqual(0))
//     })
// })

// }
