console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('hello world')
}, 1000)

setTimeout(() => {
    console.log('Delayed for 1 second');
}, 5000);