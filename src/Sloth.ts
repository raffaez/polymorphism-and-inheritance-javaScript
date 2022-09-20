import { Animal } from "./Animal";

export class Sloth extends Animal{
    constructor(name: string, age: number){
        super(name, age);
    }

    public climTree(){
        console.log(`${this.name} is climbing a tree`);
    }
}