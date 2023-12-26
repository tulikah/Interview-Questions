const Memoization = () => {
    let s = 0;
    function sum(num){
        for(let i=0;i<num;i++) {
            s += i;
        }
        // console.time()
        // console.log(s);
        // console.timeEnd()
        return s;
    }

    const cahced = memoize(sum);
    console.log('cache', cahced(5));

    function memoize(func){
        let cache = {};
        return function(...args){
            let data = JSON.stringify(...args);

            if(cache[data]){
                return cache[data];
            } 
            // else {
                let tem = func(...args);
                cache[data]= tem;
                return tem;
            // }


            let num = args[0]
            if(num in cache) {
                return cache[num];
            } else {
                let s = func(num);
                cache[num] = s;
                console.log(cache);
                return s;
            }
        }
    }
}

export default Memoization;