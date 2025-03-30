// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle {
    // Constructor for the Truck class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // Call the parent class (Vehicle) constructor
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Initialize Truck-specific properties
        this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel(18, 'DefaultBrand'));
        this.towingCapacity = towingCapacity;
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
        if ('weight' in vehicle && vehicle.weight <= this.towingCapacity) {
            console.log(`Towing ${vehicleDetails}.`);
        }
        else {
            console.log(`${vehicleDetails} is too heavy to be towed.`);
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails(); // Call the parent class method
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter}"`).join(', ')}`);
    }
}
// Export the Truck class as the default export
export default Truck;
