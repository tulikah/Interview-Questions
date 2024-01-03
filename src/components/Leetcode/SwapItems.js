function SwapItems(items, newOrder) {

    const swap = function(arr, i ,j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for(let i=0; i<newOrder.length; i++){
        while(newOrder[i] !== i) {
            swap(items, i, newOrder[i]);
            swap(newOrder, i, newOrder[i])
        }
    }

    console.log(items);
    console.log(newOrder);
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

const sortedItems = SwapItems(A, B)
console.log('sortedItems', sortedItems);

export default SwapItems;