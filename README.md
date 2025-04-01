Vehicle Management CLI Tool
User Story
As a developer,
I want to update an existing application to include additional vehicle types,
So that I am able to comprehend and work with existing code bases.

Features
Command-Line Interface (CLI): A user-friendly CLI that allows users to interact with various types of vehicles.

Vehicle Creation: Ability to create new vehicles (Car, Truck, or Motorbike) by entering relevant details.

Vehicle Selection: Select from existing vehicles to perform actions on.

Action Handling: Perform various actions on the selected vehicle, such as starting, accelerating, turning, and towing.

Action Feedback: Results of actions are displayed in the command line.

Acceptance Criteria
Vehicle Type Selection:

The CLI allows users to create new vehicles or select existing vehicles.

The CLI provides the user with three vehicle types: Car, Truck, and Motorbike.

Vehicle Information Input:

When creating a new vehicle, the user can input relevant details like color, make, model, year, weight, etc.

When a user selects an existing vehicle, they can perform actions on it.

Action Execution:

After selecting or creating a vehicle, users can perform a range of actions such as:

Start vehicle

Accelerate or decelerate

Turn right or left

Reverse

Stop vehicle

Perform wheelie (for Motorbikes)

Tow another vehicle (for Trucks)

Feedback:

After performing an action, users will see the result of that action on the command-line interface.

Users can perform additional actions on the vehicle until they decide to exit the tool.

Exit Process:

Users can exit the application after completing their tasks or performing all desired actions on vehicles.

Requirements
Node.js (v12 or higher)

npm or yarn

Inquirer.js for interactive prompts

Installation
To install and run the project locally, follow these steps:

Clone the repository:

bash
Copy
git clone https://github.com/yourusername/vehicle-cli.git
cd vehicle-cli
Install the dependencies:

Using npm:

bash
Copy
npm install

Run the CLI tool:

bash
Copy
node index.js
Usage
Once the CLI starts, you will be prompted with options:

1. Create or Select a Vehicle:
You can either:

Create a new vehicle: Choose between a Car, Truck, or Motorbike and enter the relevant details.

Select an existing vehicle: Choose from previously created vehicles and perform actions on them.

2. Perform Actions:
Once a vehicle is created or selected, you can perform the following actions:

Start vehicle: Starts the vehicle.

Accelerate 5 MPH: Increase the speed by 5 miles per hour.

Decelerate 5 MPH: Decrease the speed by 5 miles per hour.

Turn Right / Left: Turn the vehicle in the specified direction.

Reverse: Reverse the vehicle.

Stop vehicle: Stop the vehicle.

Wheelie (only for Motorbikes): Perform a wheelie (Motorbikes only).

Tow a vehicle (only for Trucks): Tow another vehicle (Trucks only).

Contributing
Fork the repository

Create your feature branch: git checkout -b feature/my-new-feature

Commit your changes: git commit -am 'Add new vehicle type functionality'

Push to the branch: git push origin feature/my-new-feature

Create a new Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
