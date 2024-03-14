
//constructor function
function Car(make, model, year, owner) {
    this.make = make;
    this.model= model;
    this.year= year;
    this.owner=owner;
}

const myCar = new Car("Toyota", "landCruiser", 2020, "Victor");

console.log(myCar.owner);

//instanciating an object inside another object

function Person(name, age, sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}

const mtu = new Person("Victor", 34, "Male");

console.log(`The owner of the Car is${mtu.name} and the car model is ${myCar.model}`);

// using object()
const Animal = {
    type: "Mamals",
    Displaytype(){
        console.log(this.type);
    },
}

const animal1= Object.create(Animal);
animal1.Displaytype();
