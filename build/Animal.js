"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " has made a sound."));
    };
    return Animal;
}());
exports.Animal = Animal;
