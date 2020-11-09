// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

LICENSE TYPE\n------\n
${answers.licenseType}\n
[License Type]: https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR> "License Badge"
--- 
Table of Contents

  1. [GITHUB](#answers.githubLink)
  2. [USER STORY](#answers.userStory)
  3. [REQUIREMENTS](#answers.requirements)
  2. [MOCK-UP](#my-second-title)
  
GITHUB
##${answers.github}\n
---
USER STORY\n------\n
##${answers.userStory}\n
---
REQUIREMENTS\n------\n
${answers.requirements}\n
---

MOCK-UP\n------\n





`;
}

module.exports = generateMarkdown;
