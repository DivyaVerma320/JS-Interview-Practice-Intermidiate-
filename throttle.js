//???????????????---------------------Implement Throttle---------------------------------
/**
  * Throttle limits the number of `fn()` executions until `time` has elapsed.
  *
  */
function throttle(fn,time){
  let timer;
  return function(...args){ // spread operator
    // console.log('args1,', args)
    // console.log('args2', ...args)
    if(timer){
      return;
    }
    timer=setTimeout(()=>{
      // fn.apply(this,arguments)
      fn(...args) // rest operator
      timer=null
    },time)
  }
}      
  const fn=(ar, ar2)=>{console.log(ar, ar2)

  }   
    const run=throttle(fn,1000) // function name "throttle" is higher order function because it returns another function(fn) 
   run("hi", 'divya') 
  //  setTimeout(() => {
  //    run("hola")
  //  }, 2000);
  //  run("hola")
  //  run("hola")
//-----------------------------------------------------------------------------


