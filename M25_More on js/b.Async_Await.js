/**Async-Await */
//  handling asynchronous task without without blocking the main thread is very important, however writing and understanding asynchronous is difficult.
//  Async and await is a syntax provided to make asynchronous code more readable.
//  looks and behave more like synchronous code.
//  With async/await we can mark a function as a asynchronous using "async" keyword and use "await" keyword to wait for the asynchronous task completed.
//  Make easier to read and write asynchronous code.
//  Handle error more effectively.

/**Need for Async-Await */
//  Nested callbacks and chained promises can leads to what`s known as "callBack Hell"  which can difficult to debug and  maintain.
//  Async and await is a syntax provided to make asynchronous code more readable.
//  looks and behave more like synchronous code.
//  Make easier to read and write asynchronous code.

/**Async */
//  The async keyword is used to mark a function as  asynchronous.
//  An async function is a function that returns a promise.
//  It is easier to link day-to-day task.  

/**Await */
//  Await Keyword is used to wait for the completion of asynchronous operation inside an asynchronous function that is marked with "async" Keyword.
//  function execution is paused until the promise returned by asynchronous function is resolved or rejected.
//  Then resolved value of the promise is then returned, allow to continue operation with the reserved value.


function returnDummyPromises(){
  return new Promise (function exec(resolve, reject){
    setTimeout(function f(){
      console.log(`timer completed `);
      let randomNumber = Math.random();
      if(randomNumber>0.5){
        resolve("done");
      }else{
        reject("err");
      }
    },1000);
  });
}

async function consume(){
  console.log("start");
  const response = await returnDummyPromises(); // await throws you out of the function and perform task on next line, after timer is completed it execute this.
  console.log(`response is: ${response}`);
}
consume();