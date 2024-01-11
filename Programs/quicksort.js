let input = [25,50,15,20,90,45,35,80];
let items = [...input];
let pivotarr = [];
let temparr = [];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    temparr.push(temp);

}
function divideddata(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
        pivotarr.push(pivot);

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = divideddata(items, left, right); //index returned from partition
        
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    console.log(items,left,right)
    return items;
}

// first call to quick sort
let sortedArray = quickSort(items, 0, items.length - 1);
 