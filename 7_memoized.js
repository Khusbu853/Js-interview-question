// Memoization is a powerful optimization technique used in computer programming 
// to speed up the execution of functions by caching their results. 
// It is particularly useful when dealing with computationally expensive or frequently called functions.


const memoize = (fn) => {
    const cache = {}
    return (...args) => {
        const argsToString = JSON.stringify(args)
        if(argsToString in cache){
            return cache[argsToString]
        } 
        else{
            const result = fn.apply(this, args)
            cache[argsToString] = result;
            return result;
        }

    }
}

const addThreeNums = (a,b,c) => a+b+c;
const add = memoize(addThreeNums)
console.log(add(1,2,3))
console.log(add(1,2,3))




// memoized version of factorial function
const factorial = memoize((x) => {
    if(x===0) return 1;
    else return x * factorial(x-1)
})

console.log(factorial(5))
console.log(factorial(6))