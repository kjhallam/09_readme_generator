const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type:'input',
        message: 'What is the project title?',
        name: 'projectTitle',
    },
    {
        type:'input',
        message: 'What is the GitHub url?',
        name: 'githubLink',
    },
    {
        type:'input',
        message: 'What is the user story?',
        name: 'userStory',
    },
    {
        type:'input',
        message: 'What are the project requirements?',
        name: 'requirements',
    },

    {
        type:'list',
        message: 'What is your license?',
        name: 'licenseType',
        choices: ['MIT', 'Apache', 'Creative Commons']
    }
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName+ '.md', data, (err) => {
         err ? console.log(err) : console.log("Success!")
      })
}
        
        // function to initialize program
            //***Need to apply an overwrite function to save a new file
        function init() {
            
             }
            
            // function call to initialize program



init();
            



    

    // WHEN I enter my project title
        // THEN this is displayed as the title of the README

    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    // choose a license for my application from a list of options
        // Display badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    // WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README

