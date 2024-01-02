console.log("<------------------------- Promise ------------------------->");

let promiseSuccessful = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 100);
});

// resolve runs the first function in .then
promiseSuccessful.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);

let promiseError = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 100);
});

// reject runs the second function in .then
promiseError.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
);