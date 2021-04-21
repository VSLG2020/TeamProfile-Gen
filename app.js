//import inquirer
const inquirer = require('inquirer');
//import employees
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const { choices } = require('yargs');
//import team/user generator
// const para = req('path')

//initialize the app
//initialiazeApp()
//this.DATA = []
// inquirer
// .prompt({
//   type: 'text',
//   name: 'name',
//   message: 'What is your name?'
// })
// .then(({ name }) => {
//   this.player = new Player(name);

//   this.startNewBattle();
// });
// }

// class NewEmployee {
//     constructor() {
//         //add teama array here
//         employee.name,
//             employee.id,
//             employee.email,
//             employee.position,
//             school
//     }

    class initializeNewEmployee {
            constructor(){
                //employee array
                this.employeeData - [];
        inquirer
            .prompt([

                //get name
                {
                    type: 'input',
                    name: 'name',
                    message: "Input the Emplyees Name:",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Must Input Employee Name');
                            return false;
                        }
                    }
                },
                //get role
                {
                    type: "list",
                    name: "role",
                    message: "Select the Employee's Role:",
                    choices: ['Manager', 'Engineer', 'Intern']
                },
                //get id
                {
                    type: "input",
                    name: "id",
                    message: "Input Employee ID Number:",
                    validate: empIdInput => {
                        if (empIdInput) {
                            return true;
                        } else {
                            console.log('Must Input Employee ID Number');
                            return false;
                        }
                    }
                },
                //get email
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter Employee Email",
                    validate: empEmailInput => {
                        if (empEmailInput) {
                            return true;
                        } else {
                            console.log("Must Enter Employee Email");
                            return false;
                        }
                    }
                },

            ])
            //give options for choices of role
            // if role === true then prompt function
            .then(employee => {
                if (role === 'Manager') {
                    return addManager(employee)
                } else if (role === 'Engineer') {
                    return addEngineer(employee)
                } else if (role === 'Intern') {
                    return addIntern(employee)
                }
            })
    }
}




module.exports = initializeNewEmployee;