console.log("<------------------------- Objects ------------------------->");

console.log("*** Copy an Object **");
let person= {
    firstName: "Jack",
    lastName: "Smith",
    fullName: function () {
        return this.firstName + "   " + this.lastName;
    }
};

console.log( person.fullName() );

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in person) {
    clone[key] = person[key];
}

clone.firstName = "John";
clone.lastName = "Doe";

console.log( clone.fullName() );