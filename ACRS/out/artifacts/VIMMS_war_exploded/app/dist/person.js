"use strict";
class Person {
    constructor(name = 'Jagga Chaudhary', age = 50, phone = '981010000', avatar = 'images/adv2.jpg') {
        this.name = "";
        this.age = 0;
        this.phone = "";
        this.avatar = "";
        console.log("Person initialized!!!!!!");
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.avatar = avatar;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map