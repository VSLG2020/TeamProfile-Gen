// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// In addition to Employee"s properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return "Intern"

//call in requier Intern
//const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

//create Intern tests
//test("what the test does", function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.string"name"));}

test("creates an Intern object", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "UNLV");

    expect(intern.name).toBe("Lacy");
    expect(intern.id).toBe("27");
    expect(intern.email).toBe("Lacy@Lacymail.com");
    expect(intern.school).toBe("UNLV");
});

//get name
test("gets Intern name from prompt", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "UNLV");

    expect(intern.getName()).toEqual(expect.stringContaining("Lacy"));
});
//get id
test("gets Intern id from prompt", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "UNLV");

    expect(intern.getId()).toBe("27");
});
// get email
test("gets the Intern email from prompt", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "UNLV");

    expect(intern.getEmail()).toEqual(expect.stringContaining("Lacy@Lacymail.com"));
})
// get role
test("gets the Intern role from prompt", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "UNLV");

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
})
// get School
test("gets the Intern School Name from prompt", () => {
    const intern = new Intern("Lacy", "27", "Lacy@Lacymail.com", "UNLV");

    expect(intern.getSchool()).toEqual(expect.stringContaining("UNLV"));
})