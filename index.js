const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "Where are you located?",
        name: "location",  
    },
    {
        type: "input",
        message: "give us a biography of your self?",
        name: "bio",
    },
    {
        type: "input",
        message: "What is your Github user name?",
        name: "userNameG",
    },
    {
        type: "input",
        message: "What is your Linkedin user name?",
        name: "userNameL",
    },
];

function writeToFile(data){
   const generateHTML = 
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
                <title>Portfolio</title>
            </head>
            <body>
                <header>
                    <h1>${data.name}</h1>
                </header>
                <main>
                    <div>
                        <p>${data.location}</p>
                        <p>${data.bio}</p>
                    </div>
                    <div>
                        <h2>Contact Links</h2>
                        <a href="https://github.com/${data.userNameG}">${data.userNameG}</a>
                        <a href="https://www.linkedin.com/in/${data.userNameL}">${data.userNameL}</a>
                    </div>
                </main>
            </body>
            </html>`
    fs.writeFile('index.html', generateHTML, (err) => {
    if(err) throw err;
        else{
            console.log("success")
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(data)
    }); 
}

// Function call to initialize app
init();
