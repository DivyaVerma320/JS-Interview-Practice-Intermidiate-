var a = 1;
function b (){
     a = 10;
     console.log('a',a)
    return;
    function a(){
        console.log('Hello');
    };
};

b() 
console.log('a1',a);
/**
 * 
 * @NExplanation_Of_Above_Question When b() is called, the following steps happen inside the function:

a. Hoisting:
Within the function b, due to JavaScript's hoisting mechanism, the local function declaration function a() {} is hoisted to the top of the function b scope. This means the function declaration will shadow any other variable named a within the function b. So the function b will look like this after hoisting:
javascript function b() { function a() {} a = 10; console.log("b", a); //10 }

b. Local Scope Assignment:
Now, a = 10; inside the function b refers to the local a (which is a function due to hoisting). JavaScript allows functions to be assigned new values, so a is set to 10.

c. Logging:
The statement console.log("b", a); will print b 10 because the local a within the function b is 10.

 */

function foo(){
    function bar(){
        return 3;
    }
    return bar();
    function bar(){
        return 10;
    }
};
console.log('foo',foo());// 10

/*Explanation: As function declaration is get hoisted. the first bar is at the top and second 
    bar after the return will also be hoisted. Since there is already a bar (first function 
    declaration), the second one will replace the first one. As there could be one function 
    for a single name and the last one stays. Hence, when you executing bar, you are executed 
    the second one (after hoisting) and you get.
*/