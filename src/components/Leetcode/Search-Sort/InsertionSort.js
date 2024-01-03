const InsertionSort = () => {
    function sort(arr){
            for(let i=0; i<arr.length; i++) {
                let key = i;
                let j=i+1;
                while(k >= 0 && arr[k] > arr[j]) {
                    [arr[k], arr[j]] = [arr[j], arr[k]];
                    k--;
                    j--;
                }
            }
        }
    }

export default InsertionSort;