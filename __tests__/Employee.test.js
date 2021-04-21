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

test('creates an employee object', () => {
    const employee = new Employee('Gina', '1', 'Gina@Ginamail.com', 'Intern');
    
    expect(employee.name).toBe('Gina');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('Gina@Ginamail.com');
    //expect(employee.role).toBe('Intern');
});
//get name
test('gets employee name from prompt', () => {
    const employee = new Employee('Gina', '1', 'Gina@Ginamail.com', 'Intern');

    expect(employee.getName()).toEqual('Gina');
});
//get id
test('gets employee id from prompt', () => {
    const employee = new Employee('Gina', '1', 'Gina@Ginamail.com', 'Intern');

    expect(employee.getId()).toEqual('1');
});
// get email
test('gets the employee email from prompt', () => {
    const employee = new Employee('Gina', '1', 'Gina@Ginamail.com', 'Intern');

    expect(employee.getEmail()).toEqual(expect.stringContaining('', '', 'Gina@Ginamail.com', ''));
})
// get role
test('gets the employee role from prompt', () => {
    const employee = new Employee('Gina', '1', 'Gina@Ginamail.com', 'Intern');

    expect(employee.getRole()).toEqual(expect.stringContaining('', '', '', 'Intern'));
})