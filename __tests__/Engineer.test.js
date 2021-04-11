// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
// in addition to Engineer's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

//call in requier Engineer
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

//create Engineer tests
//test('what the test does', function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.string'name'));}

test("creates an Engineer object", () => {
    const engineer = new Engineer("Bob", "45", "Bob@Bobmail.com", "Engineer","Bob45@github.oi");
    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toBe("45");
    expect(engineer.email).toBe("Bob@Bobmail.com");
    expect(engineer.role).toBe("Engineer");
});
//get name
test("gets Engineer's name from prompt", () => {
    const engineer = new Engineer("Bob", "", "", "","");

    expect(engineer.getName()).toBe("Bob");
});
//get id
test("gets Engineer's id from prompt", () => {
    const engineer = new Engineer("", "45", "", "", "");

    expect(engineer.getId()).toBe("id");
});
// get email
test("gets the Engineer email from prompt", () => {
    const engineer = new Engineer("", "", "Bob@Bobmail.com", "","");

    expect(engineer.getEmail()).toBe("email");
})
// get role
test("gets the Engineer role from prompt", () => {
    const engineer = new Engineer("", "", "", "Engineer","");

    expect(engineer.getRole()).toBe("Engineer");
})
// get github
test("gets the Engineer gitHub from prompt", () => {
    const engineer = new Engineer("", "", "", "","Bob45@github.oi");

    expect(engineer.getGithub()).toBe("Bob45@github.oi");
})