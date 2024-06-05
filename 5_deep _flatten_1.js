const flatten = (arr, n) => {
    if(n===0){
        return arr;
    }

    const result = []
    for(let i=0; i< arr.length; i++){
        if(!Array.isArray(arr[i])){
            result.push(arr[i])
        }
        else{
            const flattenArr = flatten(arr[i], n-1)
            result.push(...flattenArr);
        }
    }
    return result;
}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 2;
console.log(flatten(arr, 1));
