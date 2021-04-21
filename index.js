//import inquirer
const inquirer = require('inquirer');
//import employees
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
//import team/user generator
//us fs require
const fs = require("fs");
// const para = req('path')
let team = [];

const employeeQuestions = () =>{
    return inquirer
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
    }
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
};

//add employee 
const addEmployee = [
    {
      type: "list",
      name: "menu",
      message: "Who would you like to add?",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ];

//manager questions/add functions
//addmanager
function addManager() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        employeeArray.push(managerAnswers);
        add();
    });
}
//manager questions
const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
];

//engineer questions/add functions
//add engineer
function addEngineer() {
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        employeeArray.push(engineerAnswers);
        add();
    });
}
//engineerquestions
const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
    }
];

//intern questions/add functions
//add intern
function addIntern() {
    inquirer.prompt(internQuestions).then((internAnswers) => {
        employeeArray.push(internAnswers);
        add();
    });
}
//engineer questions
const internQuestions = [
    {
        type: "input",
        name: "internSchool",
        message: "What is the name of the intern's school?",
    }
];

//init function
function init() { 
        inquirer
          .prompt(employeeQuestions)
          .then((employeeAnswers) => {
            team.push(employeeAnswers); 
            
            addEmployee();
          })
          .catch((err) => {
            
            console.log(err);
          });
      }


init()