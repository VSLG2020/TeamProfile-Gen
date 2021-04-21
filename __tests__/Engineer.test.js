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
//const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
//create Engineer tests
//test('what the test does', function){
//const role= new role(name,id,email);
//expect(role.get()).toEqual(expect.stringContaining'name'));}

test('creates a Engineer object', ()=>{
    const engineer = new Engineer('Bob',45,'Bob@bobmail.com', 'Bob45Hub');
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe(45);
    expect(engineer.email).toBe('Bob@bobmail.com');
    expect(engineer.gitHub).toBe('Bob45Hub');
})
//get name
test('gets Engineer name from prompt', () =>{
    const engineer = new Engineer('Bob',45,'Bob@bobmail.com', 'Bob45Hub');
    
    expect(engineer.getName()).toEqual(expect.stringContaining('Bob'));
})
//get ID
test('gets the Engineer ID', () =>{
    const engineer = new Engineer('Bob',45,'Bob@bobmail.com', 'Bob45Hub');
    
    expect(engineer.getId()).toBe(45);
})
//get Email
test('gets the Engineer email', () =>{
    const engineer = new Engineer('Bob',45,'Bob@bobmail.com', 'Bob45Hub');
   
    expect(engineer.getEmail()).toEqual(expect.stringContaining('Bob@bobmail.com'));
})
//get Role
test('gets the Engineer role', () =>{
    const engineer = new Engineer('Bob',45,'Bob@bobmail.com', 'Bob45Hub');
    
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})
//get github
test('gets the Engineer gitHub username', () =>{
    const engineer = new Engineer('Bob',45,'Bob@bobmail.com', 'Bob45Hub');
   
    expect(engineer.getGitHub()).toEqual(expect.stringContaining('Bob45Hub'));
})
