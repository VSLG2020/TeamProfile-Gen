//us fs require
const fs = require("fs");
//import inquirer
const inquirer = require('inquirer');
//import employees
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
// links to pages to generate content
const generatePage = require('./src/generate-templates')
const writeHTML = require('./utils/generate-site')
//team array
const team = [];

function employeeQuestions()  {
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
            //get role
            {
                type: "list",
                name: "role",
                message: "Select the Employee's Role:",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        //give options for choices of role
        //if role === true then prompt function(s)
        .then(answers => {

            //questions based on role
            if (answers.role === 'Manager') {
                inquirer.prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "What is the manager's office number?",
                    validate: officeNumberInput => {
                        if (officeNumberInput) {
                            return true;
                        } else {
                            console.log('Please enter Manager office Number')
                            return false;
                        }
                    }
                }])
                    .then(answers => {
                        console.log(answers.office)

                        const defaultManager = new Manager(answers.name, answers.email, answers.id, answers.role, answers.officeNumber)
                        team.push(defaultManager);
                        addEmployee();
                    })
                // return addManager(employee);
            } else if (answers.role === 'Engineer') {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "gitHub",
                        message: "What is the engineer's gitHub username?",
                        validate: gitHubInput => {
                            if (gitHubInput) {
                                return true;
                            } else {
                                console.log("Please enter gitHub Username!")
                                return false;
                            }
                        }
                    }])
                    .then(answers => {
                        console.log(answers.gitHub)

                        const defaultEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, answers.gitHub)
                        team.push(defaultEngineer);
                        addEmployee()
                    })


                // return addEngineer(employee);
            } else if (answers.role === 'Intern') {
                inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What is the Interns School?",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter Interns school!')
                            return false;
                        }
                    }
                }])
                    // return addIntern(employee);
                    .then(answers => {
                        const defaultIntern = new Intern(answers.name, answers.email, answers.id, answers.role, answers.school)
                        team.push(defaultIntern);
                        addEmployee()
                    })
            }else{
                const defaultEmployee = new Employee (answers.name, answers.email, answers.id, answers.role)
                team.push(defaultEmployee)
                addEmployee()
            }

            function addEmployee(){
                inquirer.prompt([{
                    type: 'confirm',
                    name: 'addNew',
                    message: 'Would you like to add (another) employee?'
                }])
                .then(res =>{
                    if(res.addNew === true){
                        employeeQuestions(team)
                    }else{
                        console.log('team', team)
                        let cardsHTML = generatePage(team)
                        writeHTML(cardsHTML)
                    }
                })
            }
        })
};

employeeQuestions();

