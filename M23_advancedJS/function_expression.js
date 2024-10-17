
/** we can learn about different ways a function can be initiated ---->> */






/**this is function declaration  */
function fun(){  /**function declaration  */
  // function code
}







/** named function expression 
 * all function have a scope of there parents only we can not access them without their parents they are bound to it
 * called : because we give names to these expression 
 */

/**
 *  * Question is: why we are giving them names which has no use ...
 * Ans: because readability of code is enhanced people use relatable names for better and clean coding 
 *       names are used to call the recursion , named function expression are also be helpful for recursion 
 */
let f = function gun(){ /** named function expression : because let is not a keyword  */
  // function code
}






/**Anonymous function expression 
 * called: because we are not giving them names .
 */
let a = function (){ /** Anonymous function expression : because let is not a keyword  */
  // function code 
}





(function x(){ /** function expression : because "(" is not a keyword  */
  // can you stop it ?
})






(function(){ /** function expression : because "(" is not a keyword  */
  // i am done
})






let y =() =>{/** function expression : because let is not a keyword  */

}
