# sandbox-js

<img src="https://github.com/churchofscyence/resources/blob/main/banners/banner-thomas-edison.png" alt="Thomas Edison">

# Topics
## Section 1: Setup


### Setup JavaScript with Node.js

Creating directory and change directories of the work space. From the Command Line Terminal run the following commands.
```
% mkdir section1
% cd section1 
```

Create the package.json to manage your changes libaries. The y option will automatically accept all defaults.
```
% npm init -y
```

Create source directory.
```
% mkdir src
% cd src
% touch copy-object.js
```

Change following configuration in the package.json file
```
  "scripts": {
    "start": "node ./src/copy-object.js"
  },
```

Run the project
```
% npm run start
```

# Section2: Objects

### Copy Objects
1. **Object.assign()** You use this method to copy the values and properties from one or 
more source objects to a target object.
```
// Declaring Object
const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false
};

// Cloning the Object with Object.assign() Method
let cloneUser = Object.assign({}, userDetails);

console.log(cloneUser); // {name: 'John Doe', age: 14, verified: false}
```
2. **JSON.parse()** You will use this method alongside JSON.stringify(). You can use this to deeply 
clone.
```
// Declaring Object
const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false
};

// Cloning the Object with JSON.parse() Method
let cloneUser = JSON.parse(JSON.stringify(userDetails));

console.log(cloneUser); // {name: 'John Doe', age: 14, verified: false}
```
3. **For Loop** You can iterate through objects and copy the contents from one object to another with the a For Loop.
```
const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false
};

let clone = {};

for (let key in userDetails) {
    clone[key] = userDetails[key];
}

console.log(clone.name);
```

# Section 3 : Call Back

A callback function is a function that is passed as an argument to another function. 
The function that receives the callback can then call our code when it finishes a long task,
while allowing us to continue the execution of the code.



# References
* [JavaScript Tutorial - javascripttutorial.net](https://www.javascripttutorial.net/)
* [The Modern JavaScript Tutorial - javascript.info](https://javascript.info/)
## Section 1: Setup
* [How to create and run Node.js project in VS code editor - geeksforgeeks.org](https://www.geeksforgeeks.org/how-to-create-and-run-node-js-project-in-vs-code-editor/)
## Section2: Objects
* [JS Copy an Object – How to Clone an Obj in JavaScript -Joel Olawanle - freecodecamp.org](https://www.freecodecamp.org/news/clone-an-object-in-javascript/)
* [Object references and copying - javascript.info](https://javascript.info/object-copy)
## Section 3 : Call Back
* [JavaScript Callbacks - w3schools.com](https://www.w3schools.com/js/js_callback.asp)