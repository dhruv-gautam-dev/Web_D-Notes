class Product { /** class is a bluePrint used to create a no. of object with same property  */
  constructor(n, p,d){ /** constructor is called automatically when a class is invoke or used  */
    
    this.name = n; /**this keyword is a data member and  is used to set the property of object through which it is called  */
    this.price = p;/**data member */
    this.discount=d;
  }
  
  display(){  /**methods are nothing but function displaying behaviors  */
    console.log(`name of a product is: ${this.name}\nand price of the product is: ${this.price}\nand the discounted price is: ${this.discountPrice()}`);
  }
  discountPrice(){ /**discountPrice() is a method and can be called by any object of this class */
    let newPrice=this.price*(Math.floor(100-this.discount)/100);
    return newPrice;
  }
}

const p1 = new Product("iphone", 120000,10); /**creating a object with a bluePrint of class Product */
const p2 = new Product("Samsung S23",600000, 20);/**creating another object with a bluePrint of class Product */
p1.display();
p2.display();


/** Function constructor  */
console.log("\n-------Function constructor-------");
function Product1(n,P){
  this.name=n;
  this.price=P;
  // return "Dhruv" /** return statement is ignored  */
  return { x:10 , y:20} /** it execute because they  return only object  */
}
const p3 = new Product1("myName", 1000);
console.log(p3);


/*
this keyword
classes
objects 
how to create a new product 
we can create new product by using new class
and use all the methods of the class through which object is created 
constructor
*/

/**
 * this keyword is different in js as compare to other language.
 * this keyword refers to the context from where we call the function-----> is not applicable to arrow function.
 * 
 * we can not use this keyword in arrow function () =>{} constrictors as
 * we use them in normal constrictors and function constrictors
 * 
 */

/**
 * in function constrictors,
 * if you don't return anything js will return the newly created object, 
 * if you return primitive, js will return the newly created object,
 * if you return the customized object , js will return the customized object.
 */

/**
 * Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called"lexical scoping".
 *  This makes arrow functions to be a great choice in some scenarios but a very bad one in others
 */