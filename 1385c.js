function isGoodArray(array) {
    let l = 0;
    let r = array.length - 1;
    let max = Infinity;
    let toRemove = 0;  // number of items to remove
    while (l < r) {
        // Left most item is smaller than the right most item
        if (array[l] <= array[r]) {
            // If the item is smaller than the current minimum array is not a good array
            if (array[l] < max) {
                toRemove++;
            } else {
                max = array[l];
            }
            l++;
        // Right most item is smaller than the left most item
        } else {
            // If the item is smaller than the current minimum array is not a good array
            if (array[r] < max) {
                toRemove++;
            } else {
                max = array[r];
            }
            r--;
        }
    }

    return toRemove;
}


console.log(isGoodArray([1, 2, 3, 4, 5]));  // => 0
console.log(isGoodArray([4, 3, 3, 8, 4, 5, 2])); // => 4
console.log(isGoodArray([1, 1, 1])); // => 0
console.log(isGoodArray(1, 3, 1, 4, 5, 3, 2)); // => 2