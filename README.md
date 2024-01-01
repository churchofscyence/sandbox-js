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
% touch index.js
```

Change following configuration in the package.json file
```
  "scripts": {
    "start": "node ./src/index.js"
  },
```

Run the project
```
% npm run start
```