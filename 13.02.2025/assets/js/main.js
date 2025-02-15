class Animal {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return `${this.#name}`;
  }
  setName(name) {
    return `${(this.#name = name)}`;
  }

  //   get Run() {
  //     console.log(`${this.name} is running`);
  //   }

  Greeting() {
    console.log("Animal is greeting");
  }
}

let animal = new Animal("Barbos");

// class Dog extends Animal {
//   static test = "static property";

//   constructor(name) {
//     super(name);
//   }

//   static {
//     console.log("Static block");
//   }

//   Run() {
//     console.log(`${this.name} `);
//   }

//   Greeting() {
//     console.log("Dog is greeting");
//   }
// }

// let dog = new Dog("Dog");

// console.log(dog);

// animal.Greeting();
// dog.Greeting();

// console.log(dog);
// console.log(Dog.test);

// function foo(arg1) {
//   console.log(arg1);
// }

// function foo(arg1, arg2) {
//   console.log(arg1, arg2);
// }

// foo("test", "test1");
