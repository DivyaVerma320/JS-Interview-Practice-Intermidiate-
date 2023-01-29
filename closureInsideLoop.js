/*
Question[14]: you have a for loop if you have setTimeout inside it. If log the loop counter
            inside setTimeout, what will be logged?
 */

for(var i=0; i<10; i++){
    setTimeout(function(){
        console.log(i);//O/P=> 10 10 times/ NOT 0,1,2,....,9
    }, i)
};

/*
Explanation: The console log is inside the anonymous function of setTimeout and setTimeout
             is executed when current call stack is over. So, the loop finishes and before 
             setTimeout get the chance to execute. However, anonymous functions keep a
             reference to i by creating a closure. Since, the loop is already finished, 
             the value i has been set to 10. When setTimeout use the value of i by reference,
             it gets the value of i as 10. Hence, you see 10 ten times.
*/


for(let i = 0; i < 10; i++) {
    setTimeout((function() {
      console.log(i);//o/p : 0,1,2,....,9
    }), 1000*i)
}

