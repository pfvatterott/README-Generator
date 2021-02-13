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
    name: 'name',
    message: 'What is your first and last name?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    },
    {
    type: 'confirm',
    name: 'askLogo',
    message: 'Do you have a logo for the top of your README?',
    default: true,
    },
    {
    type: 'input',
    name: 'logoURL',
    message: 'What is the URL for the logo?',
    when: function (answers) {
        return answers.askLogo;
    },
    },
    {
    type: 'input',
    name: 'description',
    message: 'Give a brief description about your project.'
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Give instructions on how to install about your project.'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Give instructions on how to use your project.'
    },
    {
    type: 'list',
    name: 'license',
    message: 'Which license do you want to use?',
    choices: ['BSD', 'MIT', 'GPL'],
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'What are your guidelines for contributing?'
    },
    {
    type: 'input',
    name: 'testing',
    message: 'What are your instructions for testing?'
    },

]

// function to initialize program
function init(questions) {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile('UserREADME.md', generateMarkdown(answers), (err) => 
            err ? console.error(err) : console.log('Your UserREADME has been created!'))
        })
}

// function call to initialize program
init(questions);
