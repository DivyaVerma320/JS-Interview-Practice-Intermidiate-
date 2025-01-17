//-----------------------------------Sleep func----------------------------------------
// Create a sleep function that takes one parameter (time) and
// will wait for "time" ms. See the below example:

const sleep = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("In setTimeOut");
      res("D1");
    }, time);
  });
};

async function consume() {
  const result = await sleep(100);
  console.log("result", result);
  let newVal = "D2 " + result;
  console.log(newVal);
  //------------other way to consume promises-------

  // sleep(100).then((res) =>{
  //     console.log(res);
  //     let newVal = 'D2 ' + res;
  //     return newVal;
  // }).then((res2) =>{
  //     console.log(res2);
  // })
}
consume();

//NOTE=>
/*When we pass multiple promises to the Promise.race method, it resolves/rejects the first
 promise that resolves/rejects.
 ----Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
*/
