// function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.projectTitle}

## LICENSE TYPE

---

${answers.licenseType === "Apache" ? "[![License: Apache](TBD - Grab License Badge)]" : 
  answers.licenseType === "Creative Commons" ? "[![License: CC](TBD - Grab License Badge)]" : 
  answers.licenseType === "MIT" ? "[![License: MIT](TBD - Grab License Badge)]" : "None"}
 
## Table of Contents

---

  1. [GITHUB](#github)
  2. [USER STORY](#userStory)
  3. [REQUIREMENTS](#requirements)
  2. [MOCK-UP](#mock-up)
  
## GITHUB

---

[${answers.githubUser}](http://github.com/${answers.githubUser})

## USER STORY

---

${answers.userStory}

## REQUIREMENTS

---

${answers.requirements}



`;
}

module.exports = generateMarkdown;
