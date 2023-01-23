const inquirer = requirer('inquirer')
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
        name: "userName",
    },
    {
        type: "input",
        message: "What is your Linkedin user name?",
        name: "userName",
    },
];




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("index.html", data)
    }); 
}

// Function call to initialize app
init();
