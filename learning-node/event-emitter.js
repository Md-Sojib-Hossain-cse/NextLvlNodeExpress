const EventEmitter = require ("events");

const myEmitter = new EventEmitter();

//First listener
myEmitter.on("birthday" , () => {
    console.log("happy birthday")
})

myEmitter.on("birthday" , (gift) => {
    console.log(`I Will send a gift : ${gift}`)
})


myEmitter.emit('birthday' , 'watch')