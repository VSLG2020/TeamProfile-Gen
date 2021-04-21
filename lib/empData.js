const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee');

class Team extends Employee{
    constructor() {
        this.manager ={};
        this.engineer = [];
        this.intern = [];
    }

    // getDescription() {
    //     return `A ${this.name} holding a ${this.weapon} has appeared!`;
    //   }
    // }

    //add manager
    addManager(name,id,email,officeNumber){
        this.manager = new Manager(name,id,email, officeNumber)
    }
    //add engineer

    //add intern

    //getManager

    //getEngineer

    //get intern
}
    module.exports = Team;