//Question[18]: How could you cache execution of any function?

function _cacheFn(fn){
    let cache = {};
    return function(...args){
        let n = args[0];
        if(cache[n]){
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
console.log(val("hola3"))



