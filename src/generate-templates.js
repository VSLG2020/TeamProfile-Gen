
//const data = require("../lib/Employee");

const generateTeam = (data) => {

   
        let createCards =""
        for (let i = 0; i < data.length; i++) {

            let employeePosition = data.school || data.gitHub || data.officeNumber;
            let role;

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

           
        let { name, email, id} = data[i]
        createCards += `
        <div class="card col-4">
            <div class="card-header">
                <h4><b>${name}</b></h4>
                <span><p>${role}</p><span>
            </div>
                    <div class="container">
                        <p> ID: ${id}</p>
                        <p> email: ${email}</p>
                        <p> contact: ${employeePosition}</p>
                    <div>
            
        </div>
        `
    
        return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" html="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" html="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="src/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<h1>My Team</h1>
    <div class="data-cards">
        <div class='container'>
            <div class='row'>
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

module.exports = generateTeam;