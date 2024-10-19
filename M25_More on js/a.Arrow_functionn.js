// Arrow function are also known as "fat Arrow function".
// introduce in js as a shorthand for writing function expression.
// Arrow function can be written in different ways depending upon the number of parameters it accept and operation it performs .
// one Parameter and single return statement.
let P = (x)=> x*x;

// Multiple parameter and a single return statement 
let p1 =(x,y)=> x*y;

// Multiple statement in function expression 
const sum =(x,y)=>{
  console.log(`Adding ${x} and ${y}`);
  return  x+y;
};

// Returning an object 
const sumAndDifference=(x,y)=>{
  console.log(`sum : ${x+y} \ndifference:${x-y}`);
};

/**feature of arrow function syntax  */
  // parenthesis are optional in case of single parameter .
  // must use parenthesis in case of multiple parameter.
  // return keyword is not required for the single return expression in the function body .
  // return keyword is required in case of multiple statement of function.
  // to return an object notation, wrap it with single parenthesis.

/** Why should we use arrow function  */
// 1. concise syntax: when there is single statement in a function.
// 2. they have come with there own this keyword , they have not that binding property.