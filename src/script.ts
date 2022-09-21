import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Sloth } from "./Sloth";

const dog = new Dog('Thor', 6);
const horse = new Horse('BoJack', 32);
const sloth = new Sloth('Pepe', 11);

function forceMakeSound(animal: Animal){
    animal.makeSound();
}

forceMakeSound(dog);
forceMakeSound(horse);
forceMakeSound(sloth);