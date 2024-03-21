/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            console.log("getCallCount");
            return cache[key];
        } else {
            console.log("call");
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function memoizedFunction(fnName) {
    switch (fnName) {
        case "sum":
            return memoize(sum);
        case "fib":
            return memoize(fib);
        case "factorial":
            return memoize(factorial);
        default:
            throw new Error("Invalid function name");
    }
}

function performActions(fnName, actions, values) {
    const memoizedFn = memoizedFunction(fnName);
    const output = [];

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i];

        if (action === "call") {
            output.push(memoizedFn(...value));
        } else if (action === "getCallCount") {
            const callCount = Object.keys(memoizedFn.cache).length;
            output.push(callCount);
        }
    }

    return output;

        
    }



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */