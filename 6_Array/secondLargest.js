// Que1:- Second Largest Number
// Given an array Arr of size N, print second largest
// distinct elemnt from an array

function secondLargestOptimised(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY

    for(let i = 0; i<arr.length; i++) {
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] != largest && arr[i] > secondLargest ) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [23, 44, 32, 67, 3]
console.log(secondLargestOptimised(arr))