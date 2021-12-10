// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput){
                return true;
            }else{
                console.log('Please enter your project name.');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Please provide a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            }else{
                console.log('Please enter a description for your project.');
                return false;
            }
        }
    },
    
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        validate: installationInput => {
            if (installationInput){
                return true;
            }else{
                console.log('Please explain how to install your project (Briefly, if necisssary).');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples for use.'
    },
    {
        type:'input',
        name:'credits',
        message:'List your collaborators, if any.'
    },
    {
        type:'input',
        name:'test',
        message:'Please provide an example on how to run your project.'
    },
    {
        type:'list',
        name:'license',
        message:'Please choose a license:',
        choices: [
			{name: 'MIT'},
			{name: 'GNU'},
			{name: 'ISC'},
            {name: 'none'}
		],
        validate: licenseInput => {
            if (licenseInput){
                return true;
            }else{
                console.log('You need to choose a license).');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'username',
        message:'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            }else{
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:'Please provide your email address. (Required)',
        validate: emailInput => {
            if (emailInput){
                return true;
            }else{
                console.log('Please enter your email.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
		if (err) {
			throw Error(err)
		}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
		.then(answers => {
			const markDown = generateMarkdown(answers)
			writeToFile('ReadMe4U.md', markDown)
		})
}

// Function call to initialize app
init();
