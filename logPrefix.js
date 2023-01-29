/*
Question[12]: How could you set a prefix before everything you log? for example, 
            if you log('my message') it will log: "(app) my message"

Answer: Just get the arguments, convert it to an array and unshift whatever 
        prefix you want to set. Finally, use apply to pass all the arguments to console.

*/

function log(...args) {
    args.unshift('Divya');
    console.log.apply(console, args);// The console is part of the window object
    //console.log.apply(this, args);// same o/p
};

log('verma');



















