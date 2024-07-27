//Question: Without using .flat(), create a function to flatten an array---------

function flatten (arr){
    //console.log(arr + ' Glob');
    return arr.reduce((acc, init) =>{
        /*The reduce() method executes a reducer function for array element. The reduce() 
        method returns a single value: the function's accumulated result. The reduce() 
        method does not execute the function for empty array elements.
        */
        // console.log(acc);
        // console.log(init);
        if(Array.isArray(init)){
        //The Array.isArray() static method determines whether the passed value is an Array.
            acc = acc.concat(flatten(init));
            console.log(acc + ' Local');
        }else {
            acc.push(init);
            // console.log(acc + ' Rev');
        }
        return acc;
    }, [])
}
console.log(flatten([1,2,[3,4, [5,6,7], 8], 9, 10]))
//O/P= [1,2,3,4,5,6,7,8,9,10]

//OR

 var twoDimension = [[1], [2], 3, 4, [5]];
 var plano = twoDimension.reduce((acc, el) => acc.concat(el), []);
//  console.log(plano);
 

