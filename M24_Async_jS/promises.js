// promises
/**
 * in jS promises are a type of objects that get return immediately when we call them 
 * promises act as placeholder for the data that we hope to get back sometime in future 
 * placeholder is kind of temporary value
 * in this promises object we can attach the functionality we want to execute once the future task is done.
 * once the future task is done, promisees will automatically starts executing .
 */


// setTimeout(exec(), 20000); 
/** in this also function exec() is automatically performed when the timer is over , but it is inversion of control , and this problem is solved by promises */

function exec(){
  console.log("exec function is called");
}
/**readability enhancers 
 * solve the problems of inversion of controls in callbacks 
 * 
*/

/**creation of promise object is synchronous in nature  */

/** states of promises
 * 1. pending -->     default state || it represents work in progress || next state would be fulfilled or rejected || 
 * 2. fulfilled -->   if operation is completed successfully then the state property of promises object is fulfilled ||
 * 3. rejected -->    if operation is not completed successfully then the state property of promises object is rejected ||
 */

console.log("-------------------------How to create a promise----------------------------->");
/** we can create promises by using new keyword 
 */

                                                                                                              /*_______code____________________________________________

new Promise( func(resolve(), reject() ){     resolve and reject are callback function  only  
  // we can write the code 
  // line consuming task 
  resolve(x);
});

                                                                                                              __________code__________________________________________*/

/** whenever in the executer of callback function if you call the return the resolve function, the promise goes to the fulfilled state || 
 * if you called the reject function it goes ot the rejected state || 
 * if you don`t call anything promise remains in pending state   */

/**with whatever argument we call resolve or reject will gets assign to the value property  */





