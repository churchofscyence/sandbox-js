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
# References
* [JavaScript Tutorial - javascripttutorial.net](https://www.javascripttutorial.net/)
* [The Modern JavaScript Tutorial - javascript.info](https://javascript.info/)
## Section2: Objects
* [JS Copy an Object – How to Clone an Obj in JavaScript -Joel Olawanle - freecodecamp.org](https://www.freecodecamp.org/news/clone-an-object-in-javascript/)
* [Object references and copying - javascript.info](https://javascript.info/object-copy)
