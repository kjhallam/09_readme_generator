// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

GITHUB
##${answers.github}\n
---
USER STORY\n------\n
##${answers.userStory}\n
---
LICENSE TYPE\n------\n
${answers.licenseType}\n
---




`;
}

module.exports = generateMarkdown;
