function isEvenOrOdd(x){
  if(x%2==0){
    return "Even";
  }else{
    return "odd";
  }
}

// if we have a piece of code i.e is little risky so that piece of code we can bind in the try block ; 



try{
  function isEvenOrOdd(x){
    if(x%2==0){
      return console.log("Even");
    }else{
      return console.lo("odd");
    }
  }
  console.log("ending.");

}catch{
  console.log("handled");
}
isEvenOrOdd(11);