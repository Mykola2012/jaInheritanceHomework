"use strict";

console.group("Для базового класса Vehicle");

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  // length width height
  getMaxSize() {
    if (
      this.dimensions.sizeLength > this.dimensions.sizeWidth &&
      this.dimensions.sizeLength > this.dimensions.sizeHeight
    ) {
      return this.dimensions.sizeLength;
    } else if (
      this.dimensions.sizeWidth > this.dimensions.sizeLength &&
      this.dimensions.sizeWidth > this.dimensions.sizeHeight
    ) {
      return this.dimensions.sizeWidth;
    } else {
      return this.dimensions.sizeHeight;
    }
  }

  getAge() {
    return new Date().getFullYear() - this.manufactureDate;
  }
}

const car = new Vehicle(
  { sizeLength: 4.78, sizeWidth: 2.03, sizeHeight: 1.136 },
  "Lamborghini",
  "Aventador",
  2011
);

console.log("car :>> ", car);
console.log("car.getMaxSize() :>> ", car.getMaxSize());
console.log("car.getAge() :>> ", car.getAge());

console.groupEnd();
console.group("Дочерний класс PassengerTransport");

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }

  addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount += 1;
      return true;
    } else {
      return false;
    }
  }
}

const vwTransporter = new PassengerTransport(
  { sizeLength: 4.89, sizeWidth: 1.905, sizeHeight: 1.945 },
  "Volkswagen",
  "Transporter T5",
  2006,
  8,
  4
);

console.log("vwTransporter :>> ", vwTransporter);
console.log("vwTransporter.getMaxSize() :>> ", vwTransporter.getMaxSize());
console.log("vwTransporter.getAge() :>> ", vwTransporter.getAge());
console.log("vwTransporter.addPasseger() :>> ", vwTransporter.addPassenger());
console.log("vwTransporter.passengerCount :>> ", vwTransporter.passengerCount);

console.groupEnd();

console.group("Дочерний класс FreightTransport");

console.groupEnd();
