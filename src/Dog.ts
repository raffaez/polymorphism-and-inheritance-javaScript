import { Animal } from "./Animal";
import { ICanRun } from "./ICanRun";

export class Dog extends Animal implements ICanRun{
    constructor(name: string, age: number){
        super(name, age);
    }

    public run(){
        console.log(`${this.name} is running`);
    }
}