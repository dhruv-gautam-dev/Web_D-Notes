function fun( x, fn ){
  for(let  i = 0 ; i<x ; i++){
    console.log(i);
  }
  fn() ; 
}

fun(9, function exec(){   /** fun exec() is also an callback   */
  console.log( "i am executed also ..." ); 
})