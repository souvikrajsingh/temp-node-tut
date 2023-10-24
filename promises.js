const promiseCreated = new Promise((resolve, reject) => {
    reject('hello world sir');
});

console.log(promiseCreated);

promiseCreated.then((data) => console.log(data)).catch((err) => console.log(err));