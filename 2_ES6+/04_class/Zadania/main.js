//Stwórz klasę abstrakcyjną Vehicle. Stwórz trzy obiekty:
//
// boat
// car
// plane
// na podstawie odpowiednich klas dziedziczących po Vehicle.
// W odpowiednich klasach stwórz metody, które będą wypisywały
// w konsoli informacje wyróżniające te pojazdy. Zrób to w taki sposób,
// aby obiekt boat nie mógł jeździć ani latać, itp.


class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class Boat extends Vehicle {
    sail() {
        console.log(`Hej nazywam się ${this.name} i pływam`);
    }
}

class Car extends Vehicle {
    drive() {
        console.log(`Hej nazywam się ${this.name} i jezdzę.`);
    }
}

class Plane extends Vehicle {
    fly() {
        console.log(`Hej nazywam się ${this.name} i latam.`);
    }
}

const boat = new Boat("Niezatapialna 2");
boat.sail();
//boat.fly();
