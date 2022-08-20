// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Function initializes app using inquirer
function init() {
    inquirer
// Array of question prompts for user to answer and one list of licenses to choose from
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use in your project?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])  
// Answers are written to README.md with arrow function and message is rendered with console.log
      .then((answers) => {
        const markdownPageContent = generateMarkdown(answers);
        fs.writeFile('output/README.md', markdownPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        );
    });
}

// Function call to initialize app
init();

