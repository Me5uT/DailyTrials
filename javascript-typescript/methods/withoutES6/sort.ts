let myArr: number[] = [22, 19, 22, 10, 5, 55, 33, 10, 8, 45, 55, 99, 17];

const quickSort = (arr: number[]): number[] => {
  // If array lenght is limited to 1
  if (arr.length === 1) {
    return arr;
  }

  // Make right most element of the arrey the pivot point.
  let pivot: number = arr[arr.length - 1];

  /* Set two empty arrays, smaller element than pivot point goes into left array, 
       likewise, bigger elements than pivot element goes into right array.
    */
  let leftArray: number[] = [];
  let rightArray: number[] = [];

  // Iterate over the array, skip last pivot element.
  for (let i = 0; i < arr.length - 1; i++) {
    // Check if the current item is smaller than pivot, put it in left array otherwise keep in right array.
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot];
  } else {
    return [pivot, ...quickSort(rightArray)];
  }
};
const sortedArr = quickSort(myArr);
console.log(sortedArr);
