export abstract class Animal{
    public name: string;
    public age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public makeSound(){
        console.log(`${this.name} has made a sound.`);
    }
}