// Оголошення

// class Cars {}
// console.dir(Cars);

// const carInstances = new Cars();
// console.dir(carInstances);

class Car {
  static description = "Клас, який описує автомобіль";
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }
  get brand() {
    return this._brand;
  }
  set brand(newBrand) {
    this._brand = newBrand;
  }
}

const carInstance = new Car({
  brand: "Audi",
  model: "RS Q8",
  price: "170000",
});

console.log(carInstance._price);
carInstance.price = 210000;
console.log(carInstance.price);
carInstance.brand = "Ferrari";
carInstance.model = "812 Superfast";
console.log(carInstance);

const newCar = new Car({
  brand: "Tavria",
  model: "Slavuta",
  price: 1300,
});

console.log(newCar.brand);
console.log(newCar.model);
console.log(newCar.price);
