// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee"s properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return "Manager"

//call in requier Manager
//const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

//create Manager tests
//test("what the test does", function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.string"name"));}

test("creates a Manager object", ()=>{
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "3601234567");
    
    expect(manager.name).toBe("Delilah");
    expect(manager.id).toBe("15");
    expect(manager.email).toBe("Delilah@mail.com");
    expect(manager.officeNumber).toBe("3601234567");
});

//get name
test("gets Manager name from prompt", () => {
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "3601234567");

    expect(manager.getName()).toEqual("Delilah");
});
//get id
test("gets Manager id from prompt", () => {
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "3601234567");

    expect(manager.getId()).toBe("15");
});
// get email
test("gets the Manager email from prompt", () => {
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "3601234567");

    expect(manager.getEmail()).toEqual("Delilah@mail.com");
})
// get role
test("gets the Manager role from prompt", () => {
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "3601234567");

    expect(manager.getRole()).toEqual("Manager");
})
// get OfficeNumber
test("gets the Manager OfficeNumber Name from prompt", () => {
    const manager = new Manager("Delilah", "15", "Delilah@mail.com", "3601234567");

    expect(manager.getOfficeNumber()).toBe("3601234567");
})