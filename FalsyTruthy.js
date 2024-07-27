/* 
falsy: In javascript 6 things are falsy and they are- false, null, undefined, '', 0, NaN

truthy: There are only two truthy things- true and everything that is not false


Question[4]: You talked bout '' to be falsy. What about new String('')?
Answer: Though you are passing empty string to the string constructor,
        it is creating an String object. More precisely a instance of String object.
        It becomes an object. Hence, it is not false. so, it is truthy.

Question: Tell me about new Boolean(false)
Answer: truthy. As it creates an instance of the Boolean object which is an object.
         Object is truthy.

Question: Boolean(function(){})
Answer: true if you pass a truthy value to Boolean, it will be true.

Question: Boolean(/foo/)
Answer: true

Question: true%1
Answer: 0. When you are trying to find reminder of true, true becomes 1 and reminder
         of 1 while dividing by 1 is 0. you will get same result if you do false%1

Question: ''%1
Answer: 0   

Question[5]: As [] is true, []==true should also be true. right?
Answer: You are right about first part, [], empty array is an object and object is
        always truthy. Hence, if you use if([]){console.log('its true')} you will see the log.
        However, special case about == (double equal) is that it will do some implicit
        coercion.
        Since left and right side of the equality are two different types,
        JavaScript can't compare them directly . Hence, under the hood,
        JavaScript will convert them to compare.

*/

/*
14. All object have prototypes.
A: true
B: false
Answer: B

All objects have prototypes, except for the base object. The base object is the object 
created by the user, or an object that is created using the new keyword. The base object 
has access to some methods and properties, such as .toString. This is the reason why you 
can use built-in JavaScript methods! All of such methods are available on the prototype. 
Although JavaScript can't find it directly on your object, it goes down the prototype chain
and finds it there, which makes it accessible for you
*/

/*
19. What's the output?
function getAge(...args) {
  console.log(typeof args);
}
getAge(21);
A: "number"
B: "array"
C: "object"
D: "NaN"
Answer: C

The rest parameter (...args) lets us "collect" all remaining arguments into an array. 
An array is an object, so typeof args returns "object"
*/