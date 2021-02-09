const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
    },

]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init(questions) {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile('README.md', generateMarkdown(answers), (err) => 
            err ? console.error(err) : console.log('logged'))
        // Use user feedback for... whatever!!
        })
}

// function call to initialize program
init(questions);
