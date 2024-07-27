//Question[18]: How could you cache execution of any function?

function _cacheFn(fn){
    let cache = {};
    return function(...args){
        let n = args[0];
        if(cache[n]){
            console.log("calling");
            return cache[n];
        } else {
            let res = fn(n);
            cache[n] = res;
            return cache;
        }
    }

};
function fn(value){
    return value;
}
const val = _cacheFn(fn)
console.log(val("hola"))
console.log(val("hola2"))
console.log(val("hola"))
console.log(val("hola"))
console.log(val("hola3"))


//This improved version correctly implements caching for any function, handling multiple arguments and returning the expected result.


function _cacheFn2(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args); // Create a unique key for each set of arguments
        if (cache[key]) {
            return cache[key];
        } else {
            let res = fn(...args); // Call the function with all arguments\
            cache[key] = res;
            return res;
        }
    }
}

function fn(...value) {
    return value;
}

const val2 = _cacheFn2(fn);
// console.log(val2("hola")); // Calls fn("hola"), caches and returns "hola"
// console.log(val2("hola", "hello")); // Calls fn("hola"), caches and returns "hola"
// console.log(val2("hola2")); // Calls fn("hola2"), caches and returns "hola2"
// console.log(val2("hola")); // Returns cached result "hola"
// console.log(val2("hola3")); // Calls fn("hola3"), caches and returns "hola3"


