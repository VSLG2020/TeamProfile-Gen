// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

const Employee = require('./Employee');
/// to call in the employee elements

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;

    }
    getofficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Intern'
    }
    
}
 module.exports = Manager;