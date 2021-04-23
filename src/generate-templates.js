const data = require("../lib/Employee");
//const Engineer = require("../lib/Engineer");
//const Intern = require("../lib/Intern");
//const Manager = require("../lib/Manager");

const GenerateEmployee = (data) => {


    let createCards = ""
    for (let i = 0; i < data.length; i++) {

         let employeeAttribute = data.school || data.gitHub || data.officeNumber;
         let role= "Manager" || "Intern" || "Engineer" ;
        //  let objects = Object.keys(data[i])
        //let employeePosition= role;
         //let atttribute = employeePosition + ": " + employeeAttribute

        if (data === "gitHub") {
            employeePosition = `<p><a href="https://github.com/${data.gitHub}">Github</a></p> `
             role = "Engineer"
        }
        else if (data === "school") {
            employeePosition = `<p> school: ${data.school}</p> `
            role = "Intern"
        }
        else {
            employeePosition = `<p> office number: ${data.officeNumber}</p> `
             role = "Manager"
        }
        
        /////////////////////////////////////////////

        let { name, id, email } = data[i]
        createCards += `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title"><span>${name}</span></h2>
            <h3 class="card-title">
            <i class="fas fa-mug-hot mr-2"></i>${role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${email}</li>
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">${employeeAttribute}</li>
            </ul>
        </div>
    </div>
        `

        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" html="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" html="ie=edge">
        <title>Employee Profiles</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="src/styles.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
    <h1>Employee Profiles</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center"><span style="font-size: 4.5rem;">My Team</span></h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                    ${createCards}
             <div>
        </div>
    </div>
        <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} made by <a class="ml-2 my-1 px-2 py-1 text-dark"  href="https://github.com/VSLG2020"  target="_blank">VSLG</a></h3>
        </footer>
    </body>
    </html>`;
    };
}

module.exports = GenerateEmployee;