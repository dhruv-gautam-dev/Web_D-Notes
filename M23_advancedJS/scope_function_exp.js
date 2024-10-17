const f  = function fun(){
  console.log("How much fun...")
}
f();
//fun() /** output is not defined : because we can not call fun() because it has only a scop of its parent i.e f() now it is bound to it  */
