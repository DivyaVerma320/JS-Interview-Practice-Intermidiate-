/*
Question[7]: If you want to use an arbitrary object as value of this, how will you do that?

Answer: There are at least three different ways to doing this by using bind,
        call and apply. For example, I have a method named deductMontlyFee in 
        the object monica and by default value of this would be monica inside the method.
*/

var monica = {
    name: 'Monica',
    total: 1000,
    deductMontlyFee: function(fee){
        this.total = this.total - fee;
        console.log(this.name + ' remaining balance is ' + this.total);
    }
};
monica.deductMontlyFee(200);

/*
If I bind the deductMontlyFee of monica with another object rachel and pass rachel
as first parameter of the bind function, rachel would be the value of this.
*/

var rachel = {
    name: 'Rachel',
    total: 2000,
};
var RachelDeductMontlyFee = monica.deductMontlyFee.bind(rachel, 1000);
RachelDeductMontlyFee();

/*
bind allows you to borrow a method and set the value of this without calling the function.
It simply returns an exact copy of the function with new value of this. You can reuse the 
same function with new value of this without harming the old one.
*/

var ross = {
    name: 'Ross',
    total: 200
};
var RossdeductMontlyFee = monica.deductMontlyFee.bind(ross, 50);
RossdeductMontlyFee();


