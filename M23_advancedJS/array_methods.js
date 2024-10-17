let arr= [ 1,2,4,5,6,6];
arr.shift();  /**remove 1 from the start  */    /** used to remove 1 element from the start  */
arr.pop();    /**remove six from the array  */   /**this method is used to remove element at the end of an array  */
console.log(arr);
arr.push(9);  /**9 is added to the last */  /**add element at the end of the array  */
console.log(arr);
arr.unshift(19);/** add 19 at the start  */  /** unshift method is used to add the element at the start  */
console.log(arr);



console.log("-------------------------Array method for two arrays---------------------------------> ");

let a1 = [ 1,2,3,4,5,6];
let a2 = [7,8,9];

let concatArray = a1.concat(a2); /**this method is used to combine two arrays  */ /**does not change an array but return a new array  */
console.log(  concatArray);
const sliceArray = concatArray.slice(2,4); /** used to access the data from start to end-1 */ /** return   new array  */
console.log(sliceArray);

let joinArray = sliceArray.join("-"); /** to club all the element together to form a string separated by given character */
console.log(joinArray);

let revArray = a1.reverse(); /** used to reverse the array  */
console.log(revArray);

let b = [1,2,3,4];
let searchElement = b.indexOf(4); /** used to search the element of an array  */
console.log(searchElement);
console.log(arr);

console.log("-----------------splice Method ------------------------------>")
/** arr.splice(start , deletecount , i1, i2 ,i3 ) */
let b1 = [1,2,3,4];
const removed = b1.splice (2,2,0,0); /** used to remove and add some perticular element  */ /** return an array of removed element  */
console.log(b1, removed );