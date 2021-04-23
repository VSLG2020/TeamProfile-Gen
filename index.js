//us fs require
const fs = require('fs')
//import inquirer
const inquirer = require('inquirer');
//import employees
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
// links to pages to generate content
const generatePage = require('./src/generate-templates');
const writeHTML = require('./utils/generate-site');

//team array
const team = [];

function employeeQuestions() {
    inquirer
        .prompt([
            //get name
            {
                type: 'input',
                name: "name",
                message: "Input the Empolyees Name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Must Input Employee Name')
                        return false;
                    }
                }
            },
            //get id

            {
                type: 'input',
                name: 'id',
                message: "Input Employee ID Number:",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Must Input Employee ID Number')
                        return false;
                    }
                }
            },
            //get email
            {
                type: 'input',
                name: "email",
                message: "Enter Employee Email",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Must Enter Employee Email')
                        return false;
                    }
                }
            },
            //get role
            {
                type: 'list',
                name: 'role',
                message: "Select the Employee's Role:",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])
        //give options for choices of role
        //if role === true then prompt function(s)
        .then(answers => {

            //questions based on role
            if (answers.role === 'Manager') {
                inquirer
                    .prompt([{
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is the manager office number?",
                        validate: officeNumInput => {
                            if (officeNumInput) {
                                return true;
                            } else {
                                console.log('Please enter Manager office Number')
                                return false;
                            }
                        }
                    }])
                    .then(answers1 => {
                        console.log(answers1.officeNumber)

                        const defaultManager = new Manager(answers.name, answers.email, answers.id, answers.role, answers1.officeNumber)
                        team.push(defaultManager);
                        addEmployee()
                    })
                //engineer 
            } else if (answers.role === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'gitHub',
                            message: "What is the engineers gitHub username?",
                            validate: gitHubInput => {
                                if (gitHubInput) {
                                    return true;
                                } else {
                                    console.log('Please enter gitHub Username!')
                                    return false;
                                }
                            }
                        }])
                    .then(answers1 => {
                        console.log(answers.gitHub)

                        const defaultEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, answers1.gitHub)
                        team.push(defaultEngineer);
                        addEmployee()
                    })
                //get intern
            } else if (answers.role === 'Intern') {
                inquirer
                    .prompt([{
                        type: 'input',
                        name: 'school',
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
                    // return intern
                    .then(answers1 => {
                        const defaultIntern = new Intern(answers.name, answers.email, answers.id, answers.role, answers1.school)
                        team.push(defaultIntern);
                        addEmployee()
                    })
            } else {
                const defaultEmployee = new Employee(answers.name, answers.email, answers.id, answers.role)
                team.push(defaultEmployee)
                addEmployee()
            }
            //add employee function
            function addEmployee() {
                inquirer
                    .prompt([{
                        type: 'confirm',
                        name: 'addEmployee',
                        message: 'Would you like to add (another) employee?'
                    }])
                    .then(res => {
                        if (res.addEmployee === true) {
                            employeeQuestions(team)
                        } else {
                            console.log('team', team)
                            let cards = generatePage(team)
                            writeHTML(cards)

                        }

                    })

            }

        })
}


employeeQuestions();

