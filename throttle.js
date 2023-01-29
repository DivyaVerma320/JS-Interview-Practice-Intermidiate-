//???????????????---------------------Implement Throttle---------------------------------
/**
  * Throttle limits the number of `fn()` executions until `time` has elapsed.
  *
  */
function throttle(fn,time){
  let timer;
  return function(){
    if(timer){
      return;
    }
    timer=setTimeout(()=>{
      fn.apply(this,arguments)
      timer=null
    },time)
  }
}      
  const fn=(ar)=>console.log(ar)   
    const run=throttle(fn,1000)
   run("hi") 
   run("hola")
   run("hola")
   run("hola")
//-----------------------------------------------------------------------------













