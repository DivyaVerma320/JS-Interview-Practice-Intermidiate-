console.log(1);
const p1 = new Promise((res, rej) => res(1000));
p1.then((data) => {
  console.log(9);
  setTimeout(() => console.log(0), 0);
  setTimeout(() => console.log(data), data);
});
setTimeout(() => console.log(11), 1000);
setTimeout(() => console.log(300), 0);
console.log(2);
console.log(3);

/** 
Execution Order in Macrotask Phase
🧾 First Event Loop Tick (after microtasks)
Executes all 0ms timers in order:

console.log(300) ✅ scheduled first

console.log(0) ✅ scheduled second

⏱ Next Tick (~1000 ms later)
Both console.log(1000) and console.log(11) fire — but which one fires first? → Whichever was scheduled first (in code):

setTimeout(() => console.log(11), 1000) is scheduled before the .then is run, so executes first

Then console.log(1000) runs

*/
