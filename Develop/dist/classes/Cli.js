// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
// define the Cli class
class Cli {
    // TODO: Update the constructor to accept Truck and Motorbike objects as well
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    // static method to generate a vin
    static generateVin() {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // method to choose a vehicle from existing vehicles
    chooseVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then((answers) => {
            // set the selectedVehicleVin to the vin of the selected vehicle
            this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            this.performActions();
        });
    }
    // method to create a vehicle
    createVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type',
                choices: ['Car', 'Truck', 'Motorbike'], // Updated choices array
            },
        ])
            .then((answers) => {
            if (answers.vehicleType === 'Car') {
                // create a car
                this.createCar();
            }
            else if (answers.vehicleType === 'Truck') {
                // create a truck
                this.createTruck();
            }
            else if (answers.vehicleType === 'Motorbike') {
                // create a motorbike
                this.createMotorbike();
            }
            // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        });
    }
    // method to create a car
    createCar() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ])
            .then((answers) => {
            const car = new Car(
            // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
            Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [] // Replace with an appropriate Wheel[] if needed
            );
            // push the car to the vehicles array
            this.vehicles.push(car);
            // set the selectedVehicleVin to the vin of the car
            this.selectedVehicleVin = car.vin;
            // perform actions on the car
            this.performActions();
        });
    }
    // method to create a truck
    createTruck() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ])
            .then((answers) => {
            const truck = new Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [], // Replace with an appropriate Wheel[] if needed
            0 // Replace with a default number or a valid towing capacity
            );
            this.vehicles.push(truck);
            this.selectedVehicleVin = truck.vin;
            this.performActions();
        });
    }
    // method to create a motorbike
    createMotorbike() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ])
            .then((answers) => {
            const motorbike = new Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            this.vehicles.push(motorbike);
            this.selectedVehicleVin = motorbike.vin;
            this.performActions();
        });
    }
    // method to find a vehicle to tow
    // TODO: add a parameter to accept a truck object
    findVehicleToTow(truck) {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle,
                    };
                }),
            },
        ])
            .then((answers) => {
            const selectedVehicle = answers.vehicleToTow;
            // Check if the selected vehicle is the truck itself
            if (selectedVehicle.vin === truck.vin) {
                console.log("The truck cannot tow itself.");
                this.performActions(); // Allow the user to select another action
            }
            else {
                // Tow the selected vehicle
                truck.tow(selectedVehicle);
                this.performActions(); // Allow the user to select another action
            }
        });
    }
    // method to perform actions on a vehicle
    performActions() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                // Added options for "Tow" and "Wheelie"
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Tow', // New option for towing
                    'Wheelie', // New option for wheelie
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ])
            .then((answers) => {
            // perform the selected action
            if (answers.action === 'Print details') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].printDetails();
                    }
                }
            }
            else if (answers.action === 'Start vehicle') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].start();
                    }
                }
            }
            else if (answers.action === 'Accelerate 5 MPH') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].accelerate(5);
                    }
                }
            }
            else if (answers.action === 'Decelerate 5 MPH') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].decelerate(5);
                    }
                }
            }
            else if (answers.action === 'Stop vehicle') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].stop();
                    }
                }
            }
            else if (answers.action === 'Turn right') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].turn('right');
                    }
                }
            }
            else if (answers.action === 'Turn left') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].turn('left');
                    }
                }
            }
            else if (answers.action === 'Reverse') {
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].reverse();
                    }
                }
            }
            else if (answers.action === 'Tow') {
                // Perform the tow action only if the selected vehicle is a truck
                const selectedTruck = this.vehicles.find((vehicle) => vehicle.vin === this.selectedVehicleVin && vehicle instanceof Truck);
                if (selectedTruck) {
                    this.findVehicleToTow(selectedTruck);
                    return; // Avoid instantly calling performActions again
                }
                else {
                    console.log("Only trucks can tow vehicles.");
                }
            }
            else if (answers.action === 'Wheelie') {
                // Perform the wheelie action only if the selected vehicle is a motorbike
                const selectedMotorbike = this.vehicles.find((vehicle) => vehicle.vin === this.selectedVehicleVin && vehicle instanceof Motorbike);
                if (selectedMotorbike) {
                    selectedMotorbike.wheelie();
                }
                else {
                    console.log("Only motorbikes can perform a wheelie.");
                }
            }
            else if (answers.action === 'Select or create another vehicle') {
                this.startCli();
                return;
            }
            else {
                this.exit = true;
            }
            if (!this.exit) {
                this.performActions();
            }
        });
    }
    // method to start the cli
    startCli() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'CreateOrSelect',
                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
        ])
            .then((answers) => {
            // check if the user wants to create a new vehicle or select an existing vehicle
            if (answers.CreateOrSelect === 'Create a new vehicle') {
                this.createVehicle();
            }
            else {
                this.chooseVehicle();
            }
        });
    }
}
// export the Cli class
export default Cli;
