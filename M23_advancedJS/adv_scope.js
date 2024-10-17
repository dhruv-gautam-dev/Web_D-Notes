/**if we use strict mode then scope of any function or property is can be accessible inside the function only not outside the function  */
console.log(teacher); // we can access teacher here but output is undefined 
var teacher = "sanket"; // global 
console.log(teacher);// we can also access teacher here but output is sanket 

function fun(){         // global
  console.log(teacher); // no error will be given output is undefined 
  // console.log(content);
  var teacher = "pulkit";
  let content= "js";

  if(content="js"){
    let hours ="120+";
    console.log(  hours);
  }
  console.log(teacher,content); 
}

fun();
console.log(teacher);


/**use Cases of let and var  */
console.log("-------------------------use Cases of let and var-------------------------------->")

function fun(x){
  let i; // can also initialized with var , with it  we can  access this before initilization  and after 
  if(x %2==0){
    i =1; 
    console.log(i);

  }else{
    i=0;
    console.log(i);

  }
}
fun(10);

function gun(x){
  if(x %2==0){
    var i =1;   // can also initialized with let , but we can not access this before initilization 

  }else{
    var i=0;
  }
  console.log(i); // var gives function scope we can access variable inside the functionn anywhere even outside the block 

}
gun(10);


/**
 * var gives you function scope 
 *  with var we can access variable before declaration
 * let gives you block scope 
 *  with let we can not access variable before declaration and line becomes TDG{temporal dead jone }
 * 
 * redeclaration is not allowed with let but it is allowed with var 
 */
console.log("-------------------------const variable -------------------------------->")

/**
 * redeclaration for const is not working , we can not assign a value to const variable again .
 * for example---->>
 */

const i =9 ;
console.log(i);
// const i =8; /** this throws an error due to : we assign a value with const variable again  */
const obj={x:9};
console.log(obj.x);
obj.x=10; /**this does not throws an error  because we are not updating the value of const variable we are updating the value of object  */
console.log(obj.x);