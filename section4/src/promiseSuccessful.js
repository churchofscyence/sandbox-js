console.log("<------------------------- Promise Successful ------------------------->");

let promiseSuccessful = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 100);
});

// resolve runs the first function in .then
promiseSuccessful.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);

