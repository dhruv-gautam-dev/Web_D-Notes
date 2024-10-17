/**Async Programming in js
 * 1. js is synchronous in nature 
 * 2. js is single threaded in nature
 * 
 */
/* above properties are only applicable if we write valid EcmaScript code */

console.log("Hi we are starting...");
for(let i =0 ; i<10000000000;i++){/** here it takes time to run and then move forward*/ 
  //some task0
}
console.log("Done");

/** as jS is synchronous in nature but their are ways it can handle asynchronous  nature in nature  */
console.log("HI");
setTimeout(function(){console.log("time done");},5000);   /** setTimeout  is not a feature of js it is given by a browser  */
console.log("by");
/**output
 *  HI
    by
    time done(after 5 sec) {print by without taking time } (which means it handles asynchronous nature )
 */

/** browser provide a lot of feature to javaScript at runtime
 * eg:
 *      using javaScript we can modify html 
 *      using javaScript we can modify css 
 *      using javaScript we can add animation 
  */
/**
  * node is also a javaScript runtime Environment 
  */

console.log("---------------------------------------demo------------------------------->>");

function timeConsumingByLoop(){
  console.log("loops starts");

  for(let i =0; i<1000000000; i++){
    // some task 
  }
  console.log("loops ends");

}

function timeConsumingByFeature(){
  console.log("Starting timer");
  setTimeout(function exec(){
    console.log("completed the timer");
  },5000);
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByFeature();
timeConsumingByLoop();

console.log("BY");

/**javaScript always give preference to synchronous peace of code as compare to runtime peace of code or asynchronous peace of code  */
/**event loop connect every thing and constantly check that is there any global code in call stack  */
/** event queue can not executed immediately it only executed if and only if there is nothing  in the call stack and there is no global peace of code left  */
/** when the call stack is empty then  event loop push one task from event queue to call stack and then it execute it  */
