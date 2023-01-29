/*
Question[16]: Does JavaScript pass parameter by value or by reference?

Answer: when we pass a primitive into the function, a simple copy is created, 
        num (variable inside the func) will never affected the variable (num) on the outside.
        but with object, objects are passed by reference and when we change the object inside
        of the function, it is affected outside.
       
*/
var num = 10;
    var obj1 = {
        value : 'First'
    };
    
    var obj2 ={
        value: 'second'
    };

    obj3 = obj2

function log(num, obj1, obj2){
    num = 15;
    obj1 = obj2;
    console.log(obj1);
    console.log(num)
    obj2.value = 'new value'

};
log(num, obj1, obj2);

console.log(num);//10
console.log(obj1);//'First'
console.log(obj2);//'new value'
console.log(obj3);//'new value'