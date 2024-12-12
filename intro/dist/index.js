"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "Katihar";
        this.email = email;
        this.name = name;
    }
    delteToken() {
        console.log("Token deleted");
    }
    get userEmail() {
        return `email is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseCount) {
        if (courseCount <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseCount;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user = new User('alam@gmail.com', 'alam');
