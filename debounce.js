/**
 * Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls 
   take place before time has elapsed.
 */

function debounce(fn, time) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      // fn(...args1);
      //fn(arguments);
    }, time);
  };
}
/*Observe here "hi prints out only once irrespective of the no of time you invoke the passed
function "--------------------------------------*/
function fn(value) {
  console.log(value);
}
const val = debounce(fn, 1000);
const val2 = debounce(fn, 2000);
val("hi");
// val2('hiiii');
val("h");
// val2('hiiii');
