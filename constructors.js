function Person(name) {
    this.name=name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

//calling Person as a Constructor

const salva = new Person("Salva");
salva.introduceSelf();

const Francoo = new Person("Francoo");
Francoo.introduceSelf();