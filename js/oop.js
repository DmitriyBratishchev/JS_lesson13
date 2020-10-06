"use strict";

class Vehicle {
  constructor(speed, carrying, type = "не задан") {
    this.speed = `${speed} км/ч`;
    this.carrying = `${carrying} кг`;
    this.type = `${type}`;
  }
  list = () => `Тип транспорта: ${this.type};
Скорость: ${this.speed};
Грузоподъёмность: ${this.carrying}.`;
}

class Car extends Vehicle {
  constructor(speed, carrying) {
    super(speed, carrying);
    this.type = "наземный";
  }
}

class Plane extends Vehicle {
  constructor(speed, carrying) {
    super(speed, carrying);
    this.type = "Воздушный";
  }
}

class Ship extends Vehicle {
  constructor(speed, carrying) {
    super(speed, carrying);
    this.type = "Водный";
    this.speed = speed + " узлов";
  }
}

const alertList = (name) => alert( name.list() );

const auto = new Car(100, 20000);
const auto1 = new Car(70, 10000);
const plane = new Plane(800, 8000);
const ship = new Ship(20, 300000);
const s = new Vehicle(50, 40);

console.log(auto);
console.log(auto.list());
console.log(auto1);
console.log(plane);
console.log(plane.list());
console.log(ship);
console.log(ship.list());
console.log(s);
console.log(s.list());

alertList(auto1);
