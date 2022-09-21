"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
var Horse_1 = require("./Horse");
var Sloth_1 = require("./Sloth");
var dog = new Dog_1.Dog('Thor', 6);
var horse = new Horse_1.Horse('BoJack', 32);
var sloth = new Sloth_1.Sloth('Pepe', 11);
/*dog.makeSound();
horse.makeSound();
sloth.makeSound();*/
function forceMakeSound(animal) {
    animal.makeSound();
}
forceMakeSound(dog);
forceMakeSound(horse);
forceMakeSound(sloth);
