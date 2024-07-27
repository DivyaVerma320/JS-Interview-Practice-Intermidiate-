//-------------------------------------
function sayHi () {
    console.log(me);// undefined, because of hoisting
    console.log(you);
    /*ReferenceError, When we try to access the variables before they are declared. Variables 
    with the let keyword (and const) are hoisted, but unlike var, don't get initialized and declared.*/
    var me = 'Divya';
    let you = 'Deebu';
}
sayHi();

//------------------------------------
for(var i=0; i<3; i++){
    setTimeout(() => {console.log(i)}, 1);
    /*O/P= 3,3,3 Because of the event queue in JavaScript,
     the setTimeout callback function is called after the loop has been executed.
     By the time the setTimeout callback function was invoked, i was equal to 3*/
};

for(let i=0; i<3; i++){
    setTimeout(() =>{console.log(i)}, 1);
    /*O/P= 0,1,2 variables declared with the let (and const) keyword are block-scoped 
     (a block is anything between { }). During each iteration, i will have a new value,
     and each value is scoped inside the loop.
     */
}
//---Solving the above problem with IIFE
for(var i=0; i<3; i++){
  (function(i){
    setTimeout(() =>{console.log(i)}, 1);
  })(i)
  // O/P= 0,1,2
}

//------------------------------
// "use strict"
let greetings;
greetngs = {};
console.log(greetngs);
/*O/P={}, because we just created an empty object on the global object!
JS interpreter actually saw this as global.greetign = {}.
To avoid this, we can use "use strict". This makes sure that you have declared a variable
before setting it equal to anything.
 */

//-----------------------------------
function bark() {
    console.log('Woof!');
  }
  
bark.animal = 'dog';// because functions are objects, The function is an object with properties

/*25. What's the output?
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C: { a: "three", b: "two" }
D: SyntaxError

Answer: C
If you have two keys with the same name, the key will be replaced. It will still be in its 
first position, but with the last specified value.
*/

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();// 1 undefined 2

/*
A: 1 undefined 2
B: undefined undefined undefined
C: 1 1 2
D: 1 undefined undefined
Answer: A

The catch block receives the argument x. This is not the same x as the variable when we pass 
arguments. This variable x is block-scoped. Later, we set this block-scoped variable equal to 
1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal 
to 1. Outside of the catch block, x is still undefined, and y is 2. When we want to 
console.log(x) outside of the catch block, it returns undefined, and y returns 2.*/


const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
/*
A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]
Answer
Answer: B
With a for-in loop, we can iterate through object keys, in this case name and age. Under the 
hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of 
item equal to the current key it’s iterating over. First, item is equal to name, and gets 
logged. Then, item is equal to age, which gets logged.
*/


function greeting() {
  throw 'Hello world!';
}
function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}
sayHi();

/*
A: It worked! Hello world!
B: Oh no an error: undefined
C: SyntaxError: can only throw Error objects
D: Oh no an error: Hello world!

Answer: D
With the throw statement, we can create custom errors. With this statement, you can throw 
exceptions. An exception can be a string, a number, a boolean or an object. In this case, our 
exception is the string 'Hello world!'. With the catch statement, we can specify what to do if 
an exception is thrown in the try block. An exception is thrown: the string 'Hello world!'. 
e is now equal to that string, which we log. This results in 'Oh an error: Hello world!'.
*/


// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter);
/*
A: 10
B: 11
C: Error
D: NaN

Answer: C

An imported module is read-only: you cannot modify the imported module. Only the module that 
exports them can change its value. When we try to increment the value of myCounter, it throws 
an error: myCounter is read-only and cannot be modified. This means that the imported modules 
get run first, the code in the file which imports the module gets executed after.
*/


/*
const obj1 = {
  name: 'verma'
}

const obj2 ={ name1: 'divya', ...obj1 }//combine objects using the spread operator (...)
console.log(obj2)// divya verma
*/


[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

/*
A: 1 2 and 3 3 and 6 4
B: 1 2 and 2 3 and 3 4
C: 1 undefined and 2 undefined and 3 undefined and 4 undefined
D: 1 2 and undefined 3 and undefined 4

Answer: D

The first argument that the reduce method receives is the accumulator, x in this case. 
The second argument is the current value, y. With the reduce method, we execute a callback 
function on every element in the array, which could ultimately result in one single value.
In this example, we are not returning any values, we are simply logging the values of the 
accumulator and the current value The value of the accumulator is equal to the previously 
returned value of the callback function. If you don't pass the optional initialValue argument 
to the reduce method, the accumulator is equal to the first element on the first call. On the
first call, the accumulator (x) is 1, and the current value (y) is 2. We don't return from the 
callback function, we log the accumulator and current value: 1 and 2 get logged. If you don't 
return a value from a function, it returns undefined. On the next call, the accumulator is 
undefined, and the current value is 3. undefined and 3 get logged. On the fourth call, 
we again don't return from the callback function. The accumulator is again undefined, and 
the current value is 4. undefined and 4 get logged.
*/


const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}
for (let item of myLifeSummedUp) {
  console.log(item);
}
/*
A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

Answer: A

With a for-in loop, we can iterate over enumerable properties. In an array, the enumerable 
properties are the "keys" of array elements, which are actually their indexes. You could see 
an array as: {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"} Where the keys are the enumerable properties.
0 1 2 3 get logged.
With a for-of loop, we can iterate over iterables. An array is an iterable. When we iterate 
over the array, the variable "item" is equal to the element it's currently iterating over, 
"☕" "💻" "🍷" "🍫" get logged.
*/

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
console.log(output);
/*
A: possible! You should see a therapist after so much JavaScript lol
B: Impossible! You should see a therapist after so much JavaScript lol
C: possible! You shouldn't see a therapist after so much JavaScript lol
D: Impossible! You shouldn't see a therapist after so much JavaScript lol

Answer: B

[] is a truthy value. With the && operator, the right-hand value will be returned if the 
left-hand value is a truthy value. In this case, the left-hand value [] is a truthy value, 
so "Im' gets returned.
"" is a falsy value. If the left-hand value is falsy, nothing gets returned. n't doesn't 
get returned.
*/
