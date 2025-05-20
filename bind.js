/*
Question[7]: If you want to use an arbitrary object as value of this, how will you do that?

Answer: There are at least three different ways to doing this by using bind,
        call and apply. For example, I have a method named deductMonthlyFee in 
        the object monica and by default value of this would be monica inside the method.
*/

var monica = {
    name: 'Monica',
    total: 1000,
    deductMonthlyFee: function(fee){
        this.total = this.total - fee;
        console.log(this.name + ' remaining balance is ' + this.total);
    }
};
monica.deductMonthlyFee(200);

/*
If I bind the deductMonthlyFee of monica with another object rachel and pass rachel
as first parameter of the bind function, rachel would be the value of this.
*/

var rachel = {
    name: 'Rachel',
    total: 2000,
};
var RachelDeductMonthlyFee = monica.deductMonthlyFee.bind(rachel, 1000);
RachelDeductMonthlyFee();

/*
bind allows you to borrow a method and set the value of "this" without calling the function.
It simply returns an exact copy of the function with new value of this. You can reuse the 
same function with new value of this without harming the old one.
*/


var ross = {
    name: 'Ross',
    total: 200
};
var RossDeductMonthlyFee = monica.deductMonthlyFee.bind(ross, 50);
RossDeductMonthlyFee();
