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

//employee questions
this.employeeInfoQ = [

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
    {  // get employee's email
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
    {  // get if 'Manager' was selected get the office number
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
        when: (userInput) => userInput.role === "Manager"
    },
    {  // if 'Engineer' was selected get their github name
        type: "input",
        name: "github",
        message: "What is the employee's Github?",
        when: (userInput) => userInput.role === "Engineer"
    },
    {  // if 'Intern' was selected get the employee's school
        type: "input",
        name: "school",
        message: "What's the employee's school?",
        when: (userInput) => userInput.role === "Intern"
    }
]
    //create validation for if manager, engineer, intern was selected. 
    //prompt appropriate form
    .then(employee => {
        if (role === 'Manager') {
            return createManager(employee)
        } else if (role === 'Engineer') {
            return createEngineer(employee)
        } else if (role === 'Intern') {
            return createIntern(employee)
        }
    })

const createManager = () => {
    return inquirer
        .prompt([
            {
                type: 'number',
                name: 'officeNumber',
                message: `Enter Manager Office Number`,
                validate: offNumInput => {
                    if (offNumInput) {
                        return true;
                    } else {
                        console.log("Must Enter Manager Office Number");
                        return false;
                    }
                }
            }
        ])
};
const createEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: `Enter Engineer GitHub`,
                validate: gitHubInput => {
                    if (gitHubInput) {
                        return true;
                    } else {
                        console.log("Must Enter Engineer GitHub");
                        return false;
                    }
                }
            }
        ])
};
const createIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'SchoolName',
                message: `Enter Intern School Name`,
                validate: schoolNameInput => {
                    if (schoolNameInput) {
                        return true;
                    } else {
                        console.log("Must Enter Intern School Name");
                        return false;
                    }
                }
            }
        ])
};


