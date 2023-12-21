const Flatten = () => {

    // const ar = [1, [2, 3], [4, 5, 6], [7, 8, 9], [17, [18, 19]],  [11, 12, 13]];
    const arr = [1, [2, 3], [4, 5, 6], [7, 8, 9]];
    let ar = [1, 2, [3, 4, [5, 6]]]

    //for 1 level:
    const result = [].concat(...ar);
    const result1 = function(arr, depth){
        let res = [];
        ar.forEach((item) => {
            if(Array.isArray(item) && depth > 0 ){
                res.push(...result1(item, depth-1))
            } else {
                res.push(item);
            }
        })
        
      // return depth > 0 ? ar.reduce((acc, current) =>  acc.concat(Array.isArray(current) ? result1(current, depth-1) : current) , []) : ar.slice();
    
       // depth-0
        console.log(res.concat.apply([], ar));
        console.log(res.concat(...ar));
        console.log(arr.reduce((acc, current) => acc.concat(current), []));
        console.log('result1', res) ;
        // return flat;
    }
    // result1(arr, 1);
    console.log('flatten result', result1(arr, 0))   

    return (
        <div>
            <h1>Flatten a nested array</h1>
            { result1 }
        </div>

    )
}

export default Flatten;