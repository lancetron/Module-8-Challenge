// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  wheels: Wheel[];
  make: any;
  model: any;
  vin: string | undefined;

  // Constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the parent class (Vehicle) constructor
    super();

    // Initialize Motorbike-specific properties
    this.wheels = wheels.length === 2 ? wheels : Array(2).fill(new Wheel(17, 'DefaultBrand'));
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent class method
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter}"`).join(', ')}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
