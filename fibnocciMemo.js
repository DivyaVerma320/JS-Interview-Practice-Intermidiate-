/*
Question[17]: How could you implement cache to save calculation time for a recursive 
            fibonacci function?

Answer: You could use poor man's memoization with a global variable. If fibonacci is already 
        calculated it is served from the global memo array otherwise it is calculated.
*/

//????---Write fibonacci func with Memoization?--->if asked to improve the approach
//for Fibonaaci:

let memo = { 0: 0, 1: 1 };
let value;
function _fibanocci(n) {
  if (n in memo) {
    console.log(memo);
    return memo[n];
  } else {
    value = _fibanocci(n - 1) + _fibanocci(n - 2);
    memo[n] = value;
  }
  return value;
}

console.log("fib", _fibanocci(3));
//f(0): 0, f(1): 1, f(2): 1, f(3): 2, f(4): 3, f(5): 5, f(6): 8
//----------------------------------------------------------------------

//-----------------------Approach 2(using while loop)------------------------------------------
// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
// //-------------------------------------------------------------------------

// //-----------------Write a fibonacci(0112358....) func?--------------------
// //-------------------------Approach 1(using Recursion)-------------------------

const arr = [];
function fibonacci(num) {
  arr.push(num);
  // console.log(arr);
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(5));

/*
                                      5
                                 /         \
                                4          3
                              /   \       /  \
                              3     2     2    1
                            /   \  /  \  / \
                           2     1 1   0 1  0
                          / \
                         1   0   ===============> 1+1+1+1+1 = 5[5 4 3 2 1 0 1 2 1 0 3 2 1 0 1]
*/
