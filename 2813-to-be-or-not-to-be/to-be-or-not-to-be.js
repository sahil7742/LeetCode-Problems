/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
    return {
        toBe: function (expected) {
            if (val === expected || (val === null && expected === null)) {
                return true;
            } else {
                throw new Error(`Not Equal`);
            }
        },
        notToBe: function (unexpected) {
            if (val !== unexpected || (val === null && unexpected !== null)) {
                return true;
            } else {
                throw new Error(`Equal`);
            }
        }
    };
}

// Example usage:
try {
    expect(5).toBe(5); // No error
    expect(5).toBe(null); // Error: Not Equal
    expect(5).notToBe(null); // No error
} catch (error) {
    console.error(error.message);
}
