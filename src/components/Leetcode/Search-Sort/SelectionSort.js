const SelectionSort = () => {

function selectionSort(array) {
    let currentIdx = 0
    
    while(currentIdx < array.length) {
     let smallestIdx = currentIdx
     
     for (let i=smallestIdx; i<array.length; i++) {
         if (array[i] < array[smallestIdx]) {
             smallestIdx = i
           }
         }
       [array[currentIdx], array[smallestIdx]] =  [array[smallestIdx], array[currentIdx] ]
       currentIdx++
   }
     
     return array
 }
 
}
