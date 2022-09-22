const myCar = require("./my_car");

function useCar() {
  myCar.drive();
  myCar.turn(45);
  myCar.turn(45);
  myCar.turn(120);
  myCar.break();
}

useCar();
