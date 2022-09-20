import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Sloth } from "./Sloth";

const dog = new Dog('Thor', 6);
const horse = new Horse('BoJack', 32);
const sloth = new Sloth('Pepe', 11);

dog.makeSound();
horse.makeSound();
sloth.makeSound();