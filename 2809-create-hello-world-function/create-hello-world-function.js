/**
 * @return {Function}
 */
function createHelloWorld() {

    function helloWorldFunction() {
        return "Hello World";
    }
    return helloWorldFunction;
}

const f = createHelloWorld();
f(); // "Hello World"


