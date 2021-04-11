// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// in addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'
const Employee = require('./Employee');
/// to call in the employee elements

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name,id,email)
        this.gitHub = github;

    }
    getGithub(){
        return this.gitHub
    }
    getRole(){
        return 'Engineer'
    }
    
}
 module.exports = Engineer;