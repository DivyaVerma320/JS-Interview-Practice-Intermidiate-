/*
Remove Duplicate words in String
*/

/*
---------SET---------

The Set object lets you store unique values of any type, whether primitive values or object 
references. Set objects are collections of values. A value in the Set may only occur once; 
it is unique in the Set's collection.

*/

function duplicate(str){
    const arr = str.split(' ');
    const set = [...new Set(arr)];//Creates a new Set object, so we convert it into array.
    console.log(set);
    return set.join(' ');
};

console.log(duplicate('this is is me'));











