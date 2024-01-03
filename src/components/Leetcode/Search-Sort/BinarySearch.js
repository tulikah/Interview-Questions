const BinarySearch = () => {

    function binarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1;
        let mid = Math.floor((end - start) / 2);
      
        if (arr[mid] === target) {
          return mid;
        }
        if (arr[mid] < target) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      
        return -1;
      
      }

    return (
        <h1>Binary Search</h1>
    )
}