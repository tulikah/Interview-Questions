const Flatten = () => {

    const ar = [1, [2, 3], [4, 5, 6], [7, 8, 9]];
    const arr = [1, [2, 3], [4, 5, 6], [7, 8, 9]];

    //for 1 level:
    const result = [].concat(...ar);
    const result1 = function(arr, depth){
        let res = [];
        arr.forEach((item) => {
            if(Array.isArray(item) && depth > 0 ){
                res.push(...result1(arr, depth-1))
            } else {
                return res.push(arr);
            }
        })
  
        console.log('result1', result) ;
        return result1;
    }
    result1(arr)
    return (
        <div>
            <h1>Flatten a nested array</h1>
            { result }
        </div>

    )
}

export default Flatten;