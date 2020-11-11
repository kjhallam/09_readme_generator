const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
const axios = require('axios');
const promptQuestions = () =>{
    return inquirer.prompt(questions)
};   

// array of questions for user
const questions = [
    {
        type:'input',
        message: 'What is the project title?',
        name: 'projectTitle',
    },
    {
        type:'input',
        message: 'What is the GitHub username?',
        name: 'githubUser',
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
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName, data, (err) => {
        if(err) throw err 
        console.log("Success!")
      })
}


    
// function to initialize program
function init () {
    promptQuestions().then(answers => {
        axios.get('https://api.github.com/users/' + answers.githubUser).then(results => {
            answers.githubUser = results.data.html_url;
            const content = generateMD(answers)
            writeToFile('./README.md', content);
        })
    })
}
   
init();
