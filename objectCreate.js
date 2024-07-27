/*
Question[15]: Look at the code below, I have a property in a object and I am creating a 
            new object where I am setting it to a new value. If I delete that property what 
            will i get if I try to access that property?
*/

const obj1 = {
    price: 10,
    getPrice: function(){
        return this.price;
        }
};

const customObj = Object.create(obj1);
customObj.price = 15;

delete customObj.price;
console.log(customObj.getPrice());
console.log(obj1.getPrice());


/*When you are assigning some value to customObject.price, you are creating a new property 
 on the child. This means, when you delete customObject.price it deletes the price property in
 the customObject (in the child). However, when you call the method getprice, first it looks 
 for this.price in the child since the customObject doesn't have price property, JavaScript 
 executor walks through the prototype chain towards the parent. Since customObject was 
 inherited from myObject and myObject has a price property, the get_price method returns the 
 price from parent. Hence, you are getting 10
*/