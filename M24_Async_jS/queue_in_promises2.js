function getRandomINt(max){
  return Math.floor(Math.random()*max);
}


function createPromisesWithTimeout(){
  return new Promise(function executor(resolve, reject){
    console.log("Entering the executer callback in the promise constructor");
    setTimeout(function(){
      let num = getRandomINt(10);
      if(num%2==0){
        // if the number is even promise is fulfilled 
        resolve(num);
      }else{
        // if the number is odd promise is rejected 
        reject(num);
      }
    },10000);
    console.log("exiting  the executer callback in the promise constructor");

  });
}
console.log("Starting...");
let p1= createPromisesWithTimeout();
console.log("we are now waiting for the promises to complete ");
P1.then(function fulfillHandler(){},function fulfillHandler(){});