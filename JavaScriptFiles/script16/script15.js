// let obj = {
//     a: 1,
//     b: "harry"

// }
// console.log(obj);
// let animal = {
//     eats:true

// };
// let rabbit = {
//     jumps:true

// }
// rabbit.__proto__ = animal;

// console.log(rabbit.eats);
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created");

    }
    eats() {
        console.log("kha rha hun");

    }
    jumps() {
        console.log("kud rha hun");

    }
}
class lion extends Animal{
constructor(name) {
    super(name)

    console.log("Object is created and he is a lion");

    }
    eats(){
        super.eats()
        console.log("Kha raha hun roar");
        
    }
}
let a = new Animal("Bunny");
console.log(a);
let l = new lion("Shera");
console.log(l);
