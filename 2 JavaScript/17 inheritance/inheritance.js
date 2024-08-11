class Cat {
  constructor(name) {
    this.name = name;
    this.legs = 4;
  }

  move() {
    console.log(`The Cat is moving on ${this.legs} legs.`);
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

let smriti = new Cat("Smriti");
smriti.move();
smriti.speak();
//Cat.move();

class Lion extends Cat {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  eat() {
    console.log(`${this.name} eats meat.`);
  }

  speak() {
    console.log(`${this.name} roars.`);
  }
}

let simba = new Lion("Simba");
simba.move();
simba.speak();
simba.eat();

//smriti.eat();