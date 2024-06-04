// Currying in Javascrpt
// Example f(a, b) into f(a)(b)

function f(a) {
    return function (b) {
        return a+b
    }
}
console.log(f(5)(6));

// why should we use currying?
// - To avoid passing same variable again n again, to create higher order function, to make your function pure and less prone to error.


// que1:- sum(2)(6)(1)
function sum(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}
console.log(sum(2)(6)(1));



// que2:- Implement below function using currying
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if(operation === 'sum') return a+b;
            else if(operation === 'multiply') return a*b;
            else if(operation === 'divide') return a/b;
            else if(operation === 'substarct') return a-b;
            else return "invalid Operation"
        };
    };
}
const mul = evaluate("multiply");
console.log(mul(3)(5))  //15
console.log(mul(2)(5))  //10



// que2:- Infinite Currying -> sum(1)(2)(3)....(n)

function add(a) {
    return function (b) {
        if(b) return add(a+b); 
        return a;
    }
}

console.log(add(5)(2)(4)(8)());



// Real life example of currying - Manipulating DOM


// Que3:- implement a curry() function, which converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunction(...args) {
        if(args.length >= func.length) {
            return func(...args)
        }
        else {
            return function (...next) {
                return curriedFunction(...args, ...next);
            };
        }
    };
}

const sum = (a,b,c,d) => a+b+c+d;
const totalSum = curry(sum)
console.log(totalSum(1)(6)(5)(6));   //18



// Note:- https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more







