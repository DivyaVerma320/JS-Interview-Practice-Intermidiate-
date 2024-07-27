/*
Question[16]: Does JavaScript pass parameter by value or by reference?

Answer: when we pass a primitive into the function, a simple copy is created, 
        num (variable inside the func) will never affected the variable (num) on the outside.
        but with object, objects are passed by reference and when we change the object inside
        of the function, it is affected outside.
        However, you assign a new object to the passed object, the changes will not be reflected. Every time a function gets call, it gets it takes it's own context which is different from the global context. Now, in this ques we are manually changing the memory reference of the obj1 to obj2(obj1 = obj2)
        so therefore the changes will be locked only inside the called function scopes but as soon as the function gets poped out from execution stack, the memory reference return to the default pointer which is global state (where obj1 was never assigned to obj2) that is why there is no change in obj1 from the outside. If we directly make the same changes with obj1(obj1 = obj2) then it will reflect the outside too.
       
*/
let num = 10;
    let obj1 = {
        value : 'First'
    };
    
    let obj2 ={
        value: 'second'
    };

    obj3 = obj2

function log(num, obj1, obj2){
    num = 15;
    obj1 = obj2;
    console.log(obj1);
    console.log(num)  
    obj2.value = 'new value'
    console.log(obj2)
    console.log(obj3)

};
log(num, obj1, obj2);

console.log(num);//10
console.log(obj1);//'First'
console.log(obj2);//'new value'
console.log(obj3);//'new value'