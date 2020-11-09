const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = () =>{
    return inquirer.prompt([
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
]);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName+ '.md', data, (err) => {
         err ? console.log(err) : console.log("Success!")
      })
}
        // function to initialize program
            //Need to apply an overwrite function to save a new README FILE
 const init = async() => {
     console.log(writeToFile);
     try {
         const answers = await questions();

         const md = generateMD(answers);

         await fs.writeFileSync('README.md', md);

         console.log('Successful README.md file!')
     } catch (err) {
         console.log(err);
     }

    }
   
init();
   
