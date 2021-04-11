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

//call in requier Manager
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

//create Manager tests
//test('what the test does', function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.string'name'));}

test("creates an Manager object", () => {
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "Manager","360-123-4567");
    expect(manager.name).toBe("Delilah");
    expect(manager.id).toBe("15");
    expect(manager.email).toBe("Delilah@mail.com");
    expect(manager.role).toBe("Manager");
});

//get name
test("gets Manager's name from prompt", () => {
    const manager = new Manager("Delilah", "", "", "","");

    expect(manager.getName()).toBe("Delilah");
});
//get id
test("gets Manager's id from prompt", () => {
    const manager = new Manager("", "15", "", "", "");

    expect(manager.getId()).toBe("id");
});
// get email
test("gets the Manager email from prompt", () => {
    const manager = new Manager("", "", "Delilah@mail.com", "","");

    expect(manager.getEmail()).toBe("email");
})
// get role
test("gets the Manager role from prompt", () => {
    const manager = new Manager("", "", "", "Manager","");

    expect(manager.getRole()).toBe("Manager");
})
// get OfficeNumber
test("gets the Manager OfficeNumber Name from prompt", () => {
    const manager = new Manager("", "", "", "","360-123-4567");

    expect(manager.getOfficeNumber()).toBe("360-123-4567");
})