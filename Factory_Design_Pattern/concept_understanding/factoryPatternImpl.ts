// Without Factory Pattern

// interface Pet {
//   speak(): string;
// }

// class Dog implements Pet {
//   speak(): string {
//     return "Woof!";
//   }
// }

// class Cat implements Pet {
//   speak(): string {
//     return "Meow!";
//   }
// }

// const petType: string = "cat"; // Assume this is dynamic, maybe from user input

// let pet: Pet;

// if (petType === "dog"){
//     pet = new Dog();
// }
// else if(petType === "cat"){
//     pet = new Cat();
// }
// else throw new Error("Unknown pet type");

// console.log(pet.speak());



interface Pet {
  speak(): string;
}

class Dog implements Pet {
  speak(): string {
    return "Woof!";
  }
}

class Cat implements Pet {
  speak(): string {
    return "Meow!";
  }
}

class PetFactory {
  static createPet(type: string): Pet {
    if (type === "dog") return new Dog();
    if (type === "cat") return new Cat();
    throw new Error("Unknown pet type");
  }
}

// Client code
const pet: Pet = PetFactory.createPet("dog");
console.log(pet.speak());
