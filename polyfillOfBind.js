/*
Question: If an older browser don't have bind function, how will you shim it.

Answer: The bind() takes an object as an argument and returns a new function whose
        this refers to the object we passed as an argument.
        (Write the polyfill of bind())
*/

let monica = {
        name: 'Monica',
        total: 1000,
        deductMontlyFee: function(fee){
            this.total = this.total - fee
            console.log(`${this.name} remaining balnc is ${this.total}`);
        }
};
monica.deductMontlyFee(100);

let rachel = {
        name: 'Rachel',
        total: 2000,
};   

Function.prototype.myBind = function(obj,...arg){
        return () => {
                this.apply(obj, arg);
                //this.apply= monica
                //the arrow func shares the lexical 'this' keyword of its surroundings
        }
}

let RachelDeductMontlyFee = monica.deductMontlyFee.myBind(rachel, 200);
RachelDeductMontlyFee();














