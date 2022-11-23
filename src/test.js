"use strict";
// const helloMaster = (name, age, lang) => {
// console.log(`hello ${name}, you are ${age}, wellcome ${lang}!`)
// }
// helloMaster("masterJung", 31, "typescript")
// export{}
exports.__esModule = true;
var person1 = {
    name: "masterJung",
    age: 31,
    lang: "typescript"
};
var helloMaster = function (person) {
    console.log("hello ".concat(person.name, ", you are ").concat(person.age, ", Wellcome ").concat(person.lang, "!"));
};
helloMaster(person1);
