/*
Question[6]: How could you write a method on instance of a date which will give you next day?

Answer: I have to declare a method on the prototype of Date object. To get access to
        the current value of the instance of the date, i will use this
*/

Date.prototype.newDate = function(){
    var currentDate = this.getDate();
    var nextDayDate = new Date(this.setDate(currentDate + 1));
    console.log(nextDayDate);
}
var date = new Date();
date.newDate();

/*
Question: If i have a var str = 'hello world', how could i get str.reverse() return 
          'dlrow olleh'?

Answer: You have to extend the core String Object
*/

String.prototype.reverse = function(){
    var reverseD = this.split('').reverse().join('');
    console.log(reverseD);
}
//reverse is array's method.
var str = 'Divya';
var revrs = str.reverse();

//OR----

function reverse(str){
  let res = str.split('').reverse().join('')
  return res
}
 console.log(reverse("hello"))

 /* Question: How could you make this work [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5] ?
   Answer: We need to add a method in the prototype of Array object.
 */

Array.prototype.duplicator = function(){
    var arrDup = this.concat(arr);
    //OR----
    //var arrDup = this.concat(this);
    console.log(arrDup);
}

var arr = [1,2,3];
arr.duplicator();
