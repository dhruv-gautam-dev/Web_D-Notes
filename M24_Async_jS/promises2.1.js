function getRandomInt(max){
  console.log("in getRandomINt fun");
  let result = Math.floor(Math.random()*max);
  // console.log(result);
  return result;
}
console.log("started");
getRandomInt(5);

function createPromisesWithLoop(){
  return new Promise(function executer(resolve, reject){
    setTimeout(function (){
      let num =getRandomInt(10);
      if(num%2==0){
        /**if random number is even we can fulfill it  */
        resolve(num);
      }else{
        /**if random number is even we can  reject it  */
        reject(num);
      }
    },10000000);
    console.log("function executed");
  });
  
}
let x = createPromisesWithLoop();
console.log(x);

/**
 * state of promise only change if call the resolve() or reject() function 
 * 
 */