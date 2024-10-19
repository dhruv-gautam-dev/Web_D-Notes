function getRandomINt(max){
  return Math.floor(Math.random()*max);
}


function createPromisesWithTimeout(){
  return new Promise(function executor(resolve, reject){
    console.log("Entering the executer callback in the promise constructor");
    setTimeout(function(){
      let num = getRandomINt(10);
      if(num%2==0){
        // if the number is even, promise is fulfilled 
        resolve(num);
      }else{
        // if the number is odd, promise is rejected 
        reject(num);
      }
    },5000);
    console.log("exiting  the executer callback in the promise constructor");

  });
}
console.log("Starting...");
let p1 = createPromisesWithTimeout();
console.log("we are now waiting for the promises to complete ");
console.log("promise state:", p1);

p1.then(
  function fulfillHandler(value){
    console.log(`inside fulfillHandler with value ${value}`)
    console.log("promise after fulfillment is ",p1);
  },
  function rejectionHandler(value){
    console.log(`inside rejectionHandler with value ${value}`)
    console.log("promise after rejection is ",p1);
  }
);

/**
 * .then function is used to use the feature of the promises and is used to register first set of handlers in array 
 * we4 have two function in .then function 
 *  1. fulfillHandler
 *   2. rejectionHandler
 * we have two arrays on fulfillment and rejection 
 * whatever handler we registered are going to stored in the array 
 */
/**
 * .then takes two argument (fulfillHandler , rejectionHandler )
 * if we do multiple p.then then multiple handlers are registered
 * .then function also returns a new  promises objects 
 * .th
 */


/** memory spaces for promises 
 * runtime
 * event queue 
 * call stack 
 * callback queue
 * microtask queue
 */
/**\
 * microtask queue is preferable for execution as compare to callback queue 
 * all the fulfill handler comes and sit in n microtask queue and wait for the global code which is executed completely or not 
 */