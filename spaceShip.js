// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
  constructor(name,topSpeed){
    this.name = name;
    this.topSpeed= topSpeed;
  }
  accelerate(){
    console.log(`${this.name} moving to ${this.topSpeed}`);
  };
};


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

let spaceShip1 = new SpaceShip('Tafheem', 30);
spaceShip1.accelerate();
let spaceShip2 = new SpaceShip('Tasmia', 20);
spaceShip2.accelerate();
let spaceShip3 = new SpaceShip('Mamun', 50);
spaceShip3.accelerate();
