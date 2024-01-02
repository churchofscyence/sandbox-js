console.log("<------------------------- Promise Successful ------------------------->");
let promiseError = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 100);
});

// reject runs the second function in .then
promiseError.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
);