// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'

const Employee = require('./Employee');
/// to call in the employee elements

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id, email)
        this.school = school;
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    }
}
module.exports = Intern;