

/** Higher-Order Functions are functions that can accept other functions as arguments, return functions, or both. */

/**
 * Parameters------------------->
 * higherOrderFunction:   Takes a callback function, executes it, and performs operations.
 * callback:              A function passed as an argument, executed inside higherOrderFunction.
 * callbackFunction():    Logs “Callback function is executed.”
 * Invocation: Calls      higherOrderFunction(callbackFunction), executing callbackFunction within higherOrderFunction.
 */

function f(x, fn){  /** higher order function ? takes function as an argument  */
  console.log(x);
  fn();
}

f(10,function exec(){
  console.log(`i am an expression`);
})





/** Array sorting  */
let arr =[1,10,9,100];/** unSorted array */

arr.sort(); /** it sorts the given array {expectation: it might arrange element in increasing order} */

/** default implementation of array.sort() is going to sort my array in lexicographical {acc to dictionary }order  */
console.log(arr); /** output--> [ 1, 10, 100, 9 ] ||  array is not sorted   */

/**what to do to sort array in increasing order  */

let b =[1,10,9,100];/** unSorted array */
/**sort is  a HOF and it takes a comparator function as  an argument  */
b.sort(function (a,b){
  return a-b /** if a<b then it return -ve & if comparator function gives -ve then a is placed before b */
})