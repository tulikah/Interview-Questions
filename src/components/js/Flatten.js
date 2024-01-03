const Flatten = () => {

    // const ar = [1, [2, 3], [4, 5, 6], [7, 8, 9], [17, [18, 19]],  [11, 12, 13]];
    const arr = [1, [2, 3], [4, 5, 6], [7, 8, 9]];
    let ar = [1, 2, [3, 4, [5, 6]]]

    //for 1 level:
    const result = [].concat(...ar);
    const result1 = function (arr, depth) {
        let res = [];
        ar.forEach((item) => {
            if (Array.isArray(item) && depth > 0) {
                res.push(...result1(item, depth - 1))
            } else {
                res.push(item);
            }
        })

        // return depth > 0 ? ar.reduce((acc, current) =>  acc.concat(Array.isArray(current) ? result1(current, depth-1) : current) , []) : ar.slice();

        // depth-0
        console.log(res.concat.apply([], ar));
        console.log(res.concat(...ar));
        console.log(arr.reduce((acc, current) => acc.concat(current), []));
        console.log('result1', res);
        // return flat;
    }
    // result1(arr, 1);
    // console.log('flatten result', result1(arr, 0))   

    //Deep Flattening

    /*    Input:
    {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
        L: 56
        },
        Q: [1, 2]
    }   
    }

    Output:
    {
    "A": "12"
    "B": 23,
    "C.O.L": 56,
    "C.P": 23,
    "C.Q.0": 1,
    "C.Q.1": 2,
    }*/

    let input = {
        A: 12,
        B: 23,
        C: {
            P: 23,
            O: {
                L: 56
            },
            Q: [1, 2]
        }
    }

    function DeepFlattenApproach1(obj, prefix) {
        // Approach 1:
        // In this approach you create a new key for every situation, which is 
        // not efficient
        let output1 = {};

        for(let k in obj){
            let val = obj[k];
            let type = typeof val;
            if( val !== null && type === "object") {
                const newKey = prefix ? prefix + "." + k : k;
                let newObj = DeepFlattenApproach1(val, newKey);
                output1 = { ...output1, ...newObj}; 
            } 
            // else if(type === "array" ) {
            //     for(let i=0; i<val.length; i++) {
            //         const newKey = prefix ? prefix + "." + k + "." + i : k + "." + i;
            //         output1 = { ...output1, [newKey]: val[i]};
            //     }
            // }
             else {
                const newKey = prefix ? prefix + "." + k : k;
                output1 = { ...output1, [newKey]: val}; 
            }
        }
        return output1
    }

    console.log('Deep Flatten Approach1', DeepFlattenApproach1(input));

    function DeepFlattenApproach2(obj, prefix) {
        // Approach 2:
        // Covert array into object, reuse one key
        let output2 = {};

        for(let k in obj) {
            let val = obj[k];
            let type = typeof val;
            let newkey = prefix ? prefix + "." + k : k;

            if(type === "object") {
                if(Array.isArray(val)) {
                    let { ...Obj } = val;
                    let newObj = DeepFlattenApproach2(Obj, newkey);
                    output2 = { ...output2, ...newObj};
                } else {
                    let flat = DeepFlattenApproach2(val, newkey);
                    output2 = { ...output2, ...flat};
                }
            } else {
                output2 = { ...output2, [newkey]: val}
            }
        }
        return output2
    }
    console.log('Deep Flatten Approach2', DeepFlattenApproach2(input));
    /*
    String.prototype.sampleProperty = 5;
    var str = "this is a string";
    str.sampleProperty;            // 5
    By this means primitives have access to all the properties(including methods) defined by their respective object constructors.
    So the primitive types will appropriately coerce to their respective Object counterpart when required.
    */


        return(
            <div>
                <h1>Flatten a nested array</h1>
                { result1 }
            </div>

        )
}

export default Flatten;