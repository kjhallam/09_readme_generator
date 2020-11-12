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
        message: 'What is the Project Title?',
        name: 'projectTitle',
    },
    {
        type:'input',
        message: 'What is the GitHub Username?',
        name: 'githubUser',
    },
    {
        type:'input',
        message: 'What is your Description?',
        name: 'describe',
    },
    {
        type:'input',
        message: 'What are the Project Requirements?',
        name: 'requirements',
    },
    {
        type:'list',
        message: 'What is your License?',
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
            writeToFile('./README-Example.md', content);
        })
    })
}
   
init();
