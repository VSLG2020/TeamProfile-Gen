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

//call in requier Intern
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

//create Intern tests
//test('what the test does', function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.string'name'));}

test("creates an Intern object", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "Intern","University Of Nevada");
    expect(intern.name).toBe("Lacy");
    expect(intern.id).toBe("27");
    expect(intern.email).toBe("Lacy@Lacymail.com");
    expect(intern.role).toBe("Intern");
});

//get name
test("gets Intern's name from prompt", () => {
    const intern = new Intern("Lacy", "", "", "","");

    expect(intern.getName()).toBe("Lacy");
});
//get id
test("gets Intern's id from prompt", () => {
    const intern = new Intern("", "27", "", "");

    expect(intern.getId()).toBe("id");
});
// get email
test("gets the Intern email from prompt", () => {
    const intern = new Intern("", "", "Lacy@Lacymail.com", "","");

    expect(intern.getEmail()).toBe("email");
})
// get role
test("gets the Intern role from prompt", () => {
    const intern = new Intern("", "", "", "Intern","");

    expect(intern.getRole()).toBe("Intern");
})
// get School
test("gets the Intern School Name from prompt", () => {
    const intern = new Intern("", "", "", "","University of Nevada");

    expect(intern.getSchool()).toBe("University of Nevada");
})