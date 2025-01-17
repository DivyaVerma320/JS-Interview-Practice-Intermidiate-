//-------------------------
var hello;
console.log(hello);

//--------Question[3]: How would you compare two objects in JavaScript?
/*JavaScript has two different approaches for testing equality. Primitives like strings and 
numbers are compared by their value, while objects like arrays, dates, and user defined objects 
are compared by their reference. This means it compares whether two objects are referring to 
the same location in memory. If the number of properties doesn't match, these two objects are 
not equal. OR, you will check each property whether they have the same value. If all the 
properties have same value, they are equal.
  
*NOTE--
Object.keys()=>To get the list of properties(keys)
        
 */
function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  console.log("Keys,", keys1, keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const num1 = {
  A: "a",
  B: "b",
  C: "c",
};
const num2 = {
  A: "a",
  C: "c",
  B: "b",
};

const objEq = isEqual(num1, num2);
console.log(objEq);

//if([]){console.log('its true')}
