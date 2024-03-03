/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
    let currentValue = n;

    const counter = () => {
        const result = currentValue;
        currentValue += 1;
        return result;
    }
    return counter;
}
    const n = 10;
    let myCounter = createCounter(n);
    const counter = createCounter(10)
    myCounter() // 10
    myCounter() // 11
    myCounter() // 12

