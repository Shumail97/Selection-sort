function selectionSort(arr) {
    var minIdx, temp, 
        len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i; // Assume the minimum is the first element
        for (var j = i + 1; j < len; j++) {
            // Find the index of the minimum element in the remaining unsorted array
            if (arr[j] < arr[minIdx]) {
                minIdx = j; // Update minIdx if a smaller element is found
            }
        }
        // Swap the found minimum element with the first element of the unsorted part
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr; // Return the sorted array
}

// Testing the selectionSort function
function testSelectionSort() {
    const testArrays = [
        [64, 25, 12, 22, 11],
        [5, 3, 8, 4, 2],
        [1, 2, 3, 4, 5],
        [10, 7, 8, 9, 1, 5],
        [3, 0, -1, 2, 1]
    ];

    testArrays.forEach((arr, index) => {
        console.log(`Original array ${index + 1}: ${arr}`);
        const sortedArray = selectionSort(arr);
        console.log(`Sorted array ${index + 1}: ${sortedArray}`);  
    });
}

// Run the test
testSelectionSort();
