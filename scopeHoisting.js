var a = 1;
function b (){
     a = 10;
     console.log(a)
    return;
    function a(){
        console.log('Hello');
    };
};

console.log(b());
console.log(a);

function foo(){
    function bar(){
        return 3;
    }
    return bar();
    function bar(){
        return 10;
    }
};
console.log(foo());// 10

/*Explanation: As function declaration is get hoisted. the first bar is at the top and second 
    bar after the return will also be hoisted. Since there is already a bar (first function 
    declaration), the second one will replace the first one. As there could be one function 
    for a single name and the last one stays. Hence, when you executing bar, you are executed 
    the second one (after hoisting) and you get.
*/