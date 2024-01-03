const BubbleSort = () => {
    function sort(arr){
        let isSorted = false;

        while(!isSorted){
            isSorted = true;

            for(let i=0; i<arr.length; i++) {
                if(arr[i] > arr[i+1]) {
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                    isSorted = false;
                }
            }
        }
    }
}

export default BubbleSort;