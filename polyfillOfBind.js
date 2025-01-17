/*
Question: If an older browser don't have bind function, how will you shim it.

Answer: The bind() takes an object as an argument and returns a new function whose
        this refers to the object we passed as an argument.
        (Write the polyfill of bind())
*/

let monica = {
  name: "Monica",
  total: 1000,
  deductMonthlyFee: function (fee, fee2) {
    this.total = this.total - fee;
    console.log(`${this.name} remaining Blanc is ${this.total} ${fee2}`);
  },
};
monica.deductMonthlyFee(100, 300);

let rachel = {
  name: "Rachel",
  total: 2000,
};

Function.prototype.myBind = function (obj, ...arg) {
  return () => {
    console.log("this", this, obj);
    this.apply(obj, [...arg]);
    //this.apply= monica
    //the arrow func shares the lexical 'this' keyword of its surroundings
  };
};

let RachelDeductMonthlyFee = monica.deductMonthlyFee.myBind(rachel, 200, 100);
// let RachelDeductMonthlyFee = monica.deductMonthlyFee.bind(rachel, 100)
RachelDeductMonthlyFee();

let obj = {
  name: "Jack",
};

let myFunc = function () {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function (obj) {
  let func = this;
  // console.log('this', func)
  return function () {
    func.apply(obj);
  };
};

let newFunc = myFunc.myBind(obj);
newFunc(); // Jack

Function.prototype.myBind = function (obj, ...ags) {
  return () => {
    this.apply(obj, [...ags]);
  };
};
