function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // code to shift the elements that are greater than current element to the right.
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    //code to insert the current element into its correct position
    arr[j + 1] = current;

    // code to show the array at the current stage.
    console.log(`Stage ${i}:`, arr);
  }
  return arr;
}

// Sample array mixed up
const array = [12, 5, 11, 2, 4];
//calling each stage taken in sorting the array.
console.log('Sorting stages:');
insertionSort(array);
//final arrangement of the array
console.log('Sorted array:', array);
