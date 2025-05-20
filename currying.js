/*Question[21]: How would you implement currying for any functions?

What is curring: Curring is partial invocation of a function. Currying means first few 
arguments of a function is pre-processed and a function is returned. The returning function 
can add more arguments to the curried function. It's like if you have given one or two spice 
to the curry and cooked little bit, still you can add further spice to it.
*/

function curry(base) {
  return function (num) {
    return base + num;
  };
}

const number = curry(10);
console.log(number(15));
console.log(number(12));
console.log(number(1));

////////////////////////

function currying(a) {
  return function (b) {
    if (!b) return a;
    return currying(a + b);
  };
}

console.log(currying(1)(2)(3)(4)(5)());
