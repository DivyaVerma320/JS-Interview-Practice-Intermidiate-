//----------------------Promise.all (function)--------------------------------------------
/*
 Write a function newPromiseAll which takes an array of Promises as an argument,
 and returns a promise, which if resolved, returns the result of each promise in an array,
 or an error catch block, if one of the promises is rejected.
 */

//newPromises(promisesArr).then((results)=>{ }).catch(err){}

const task = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`hi ${time}`);
    }, time);
  });
};

//task(10).then((val)=>console.log(val))

const TaskList = [task(100), task(2000), task(3000)];

function newPromiseAll(TaskList) {
  const results = [];
  let taskCompleted = 0;
  return new Promise((res, rej) => {
    TaskList.forEach((currPromise, i) => {
      //forEach is synchronous as you can comment out below log!
      console.log(i);
      currPromise
        .then((val) => {
          //results.push(val)
          results[i] = val;
          taskCompleted++;
          if (taskCompleted === TaskList.length) {
            res(results);
          }
        })
        .catch((err) => rej(err));
    });
  });
}

//---------------------------Test with below-----------------------------------

newPromiseAll(TaskList)
  .then((val) => console.log("val", val))
  .catch((err) => console.log(err));

/*----------------------------Note--------------------------------------------------
  
  --->Since the order of the results array is important, 
  we will chain each promise resolution to the next one
  ---->A simple forEach iterator can be used, 
  and we need to keep track of the index of the parent array
  --->When the number of promises resolved is equal to the length of the task array 
  we will resolve the overall results array */
