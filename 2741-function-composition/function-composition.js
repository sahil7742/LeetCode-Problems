/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose=(functions)=> {
    if (functions.length === 0) {
        return x => x; // Identity function
    } else if (functions.length === 1) {
        return functions[0]; // Single function
    } else {
        return function(x) {
            return functions[0](compose(functions.slice(1))(x));
        };
    }
}
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */