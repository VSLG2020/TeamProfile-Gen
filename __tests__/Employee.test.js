// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

//call in requier employee
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

//create employee tests
//test('what the test does', function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.string'name'));}

test("creates an employee object", () => {
    const employee = new Employee("Gina", "1", "Gina@Ginamail.com", "Intern");
    expect(employee.name).toBe("Gina");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("Gina@Ginamail.com");
    expect(employee.role).toBe("Intern");
});
//get name
test("gets employee's name from prompt", () => {
    const employee = new Employee("Gina", "", "", "");

    expect(employee.getName()).toBe("Gina");
});
//get id
test("gets employee's id from prompt", () => {
    const employee = new Employee("", "1", "", "");

    expect(employee.getId()).toBe("id");
});
// get email
test("gets the employee email from prompt", () => {
    const employee = new Employee("", "", "Gina@Ginamail.com", "");

    expect(employee.getEmail()).toBe("email");
})
// get role
test("gets the employee role from prompt", () => {
    const employee = new Employee("", "", "", "intern");

    expect(employee.getRole()).toBe("intern");
})