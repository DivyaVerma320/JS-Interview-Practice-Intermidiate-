/*
Question[8]: Write a simple function to tell whether 2 is passed as parameter or not?

Basics: arguments is a local variable, available inside all functions that provides a
        collection of all the arguments passed to the function. arguments is not an array
        rather an array like object. It has length but doesn't have the methods like forEach, 
        indexOf, etc.

Answer: First convert arguments to an array by calling slice method on an array and pass
        arguments. After that simply use indexOf.
*/

function isToPassed () {
    var args = Array.prototype.slice.call(arguments);
    //let args = Array.from(arguments);
    return args.indexOf(2) != -1;
};

var isTo = isToPassed(1,2,4);
console.log(isTo);

// //OR, With Rest Parameter, we don't have to transform into an array.

function isTooPassed (...args){
    return args.indexOf(5) != -1
};

var isToo = isTooPassed(1,2,4);
console.log(isToo);



















