/**
 * Write a JavaScript function called `incrementCountReturnFunc` that takes
 * an initial number and returns a new function. Each time you call that
 * returned function, it should first return the current value of the counter
 * and then increment it by one for the next invocation.
 */
function incrementCountReturnFunc(num) {
  return function () {
    return num++;
  };
}

const count = incrementCountReturnFunc(0);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
