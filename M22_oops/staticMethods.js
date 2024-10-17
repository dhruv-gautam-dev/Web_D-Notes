class Product { 

  discount; /** have a same meaning either it is initialized in constructor or like a "description given below " */
  #private ="can only access inside the class";
  rating ;/** shows undefined because we have not put any value  */

  descripto="my descripton"; /**working same either we initialized it here or in constrictor */

  constructor(n, p,d){ 
    
    this.name = n; 
    this.price = p;/**data member */
    this.discount=d;
  }
  
  display(){  
    console.log(`name of a product is: ${this.name}\nand price of the product is: ${this.price}\nand description of the product is: ${this.descripto}\nand the discounted price is: ${this.discountPrice()}`);
    console.log(this.#private);
  }
  discountPrice(){ /**methods are nothing but function displaying behaviors  */
    let newPrice=this.price*(Math.floor(100-this.discount)/100);
    return newPrice;
  }

  /**
 * we can call static method without creating a objects
 * we can not define static methods outside the classes because they are associated  with class only. 
 */

static staticMethod(){
  console.log("custom method ");
}
}

Product.staticMethod(); /** output: custom method */   /* can use static methods without creating a objects and can only call by using a class name */
const p1= new Product( "p1", 20, 10);
p1.display();

console.log("\n-------accessing name of P1 object------");

/**if we dont want give access to properties outside the function then we can use "#"in starting of variable/property */
console.log(p1.name);
// console.log(p1.#private);  /**this gives error because properties starting with "#" can not accessible outside the class */

/**Notes-----------------------> */

/** Static properties and methods---->
 * We can also assign a method to the class as a whole. Such methods are called static.
 * In a class declaration, they are prepended by static keyword, like this
 * Usually, static methods are used to implement functions that belong to the class as a whole,
 *  but not to any particular object of it.
 * 
 */

console.log("\n-------Class Article-------");

class Article {
  constructor(title, date) { /**fist way to create a article with date and title */
    this.title = title;
    this.date = date;
  }

  static createTodays() { /** seconnd  way to create a article with date and title */
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays(); /**we can use .createTodays again to create an article  */

console.log( article.title ); // Today's digest

/**
 * Now every time we need to create a today’s digest, we can call Article.createTodays(). 
 * Once again, that’s not a method of an article, but a method of the whole class.
 */