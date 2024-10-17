
/**               --------value->default(undefined)
 * promises ------
 *                --------state-> default(pending)
 */

new Promise (function exec(res, rej){
  // some task
})

/**At the time when constructor generates a new promise object, it also generates a pair of function called as resolve and reject
 * generally the executer callback, wraps some async or sync operation 
 * he executer is called sync
*/
console.log("--------------------consuming a promise------------------------------->")

let p =fetch("");    /**perform error || invalid url */

/** 
 * attach the functionality that we need to execute when the promises is fulfilled or rejected by using then  after some time.
*/

p.then(  fulfIllmentHandler(), rejectionHandler()  ) /** can take two parameter|| both parameters can function only that we have to implement ourself */

