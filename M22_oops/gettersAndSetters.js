class Car{
  rating =0;
  constructor(name, color){
    this.name=name;
    this.color=color;
  }
  display(){
    console.log(`Name: ${this.name} \nColor:${this.color}`);
  }
  getName(){    /**getters are used to get the value from  outside the class */
    console.log(this.name);
  }
  setName(newName){ /**setters are used to set the value from outside the class */
    this.name=newName;
  }

  getRating(){
    console.log(`Rating of ${this.name} :${this.rating}`); /**this getter is used to get the ratings from outside the class */
  }
  setRating(r){
    if(r<0){  /**we can also put some condition in setters  to check the values */
      return;
    }
    this.rating=r;
  }
}


const car1 = new Car("swift", "white");
car1.display();

// car1.name;  /** this does not work because it is out of the class and it is where getters  comes into pictures  */

car1.getName();/**By using getters in the class we can get name of the car (getters at lineNo.10 ) */
car1.setName("BMW");/** this update the value from swift to BMW */
car1.getName();/**print the updated name i.e BMW */

car1.setRating(5); /** using setter we have set the rating of car */
car1.getRating(); /**using getter we get the rating of car which is set before  */


/**
 * When you define a getter or setter, you are actually defining a method that is associated with a particular property of an object.
 * Getters and setters are defined using the get and set keywords respectively.
 * A getter must have exactly zero parameters
 * If you want to remove the getter, you can just delete it:
 */


/**
 * There are two kinds of object properties.
 * The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.
 * The second type of property is something new. It’s an accessor property. 
 * They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
 */

/**
 * Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:
 */

/**
 * get – a function without arguments, that works when a property is read,
 * set – a function with one argument, that is called when the property is set,
 */

/**
 * Technically, external code is able to access the name directly by using user._name.
 *  But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.
 */

/**
 * Using for compatibility ------------->
 * One of the great uses of accessors is that they allow to take control over a “regular” data property at any moment by replacing it with a getter and 
 * a setter and tweak its behavior.
 */
/**
 * Imagine we started implementing user objects using data properties name and age:
 */


console.log("\n-------Smarter getters/setters------------------------------------------->>");
console.log("\n-------User1-------");

class User1{
  constructor(name, age){
    this.name=name;
    this.age=age;
  }
}
const john1 = new User1("john1",25);
console.log(john1.age);

/**
 * …But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:
 */


console.log("\n-------User2-------");
class User2{
  constructor(name, birthday){
    this.name=name;
    this.birthday=birthday;
  }
}
const john2 = new User2("john2",25);
console.log(john2.birthday);
/**
 * Now what to do with the old code that still uses age property?
 * Adding a getter for age solves the problem:
 */
console.log("\n-------User3-------");

class User3{
  constructor(name, birthdayYear){
    this.name=name;
    this.birthdayYear=birthdayYear;
  }
   // age is calculated from the current date and birthday


  getAge(){
    let todayYear=2024;
    let Age=todayYear-this.birthdayYear;
    return Age;
  }
}
let john3 = new User3("John3", 2004);

console.log( john3.birthdayYear ); // birthday is available
console.log( john3.Age );      // ...as well as the age