// function to generate markdown for README
function generateMarkdown(answers) {
  return `
   [🔗]:(https://github.com/kjhallam/09_readme_generator.git)
  # ${answers.projectTitle}

---
## LICENSE TYPE

${answers.licenseType === "Apache" ? "[![License: Apache](https://img.shields.io/static/v1?label=license&message=apache&color=blue)]" : 
answers.licenseType === "Creative Commons" ? "[![License: CC](https://img.shields.io/badge/license-CC-orange)]" : 
answers.licenseType === "MIT" ? "[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)]" : "None"}
 
---

## Table of Contents

  1. [GITHUB](#github)
  2. [INSTALLATION](#installation)
  3. [DESCRIPTION](#description)
  4. [REQUIREMENTS](#requirements)
  5. [CONTACT](#contact)
  
---
  
 ## GITHUB

[${answers.githubUser}](http://github.com/${answers.githubUser})

---

---

📓 ## DESCRIPTION

${answers.describe}

---

📓 ## REQUIREMENTS

${answers.requirements}

---

💻 ## CONTACT

If any questions concerning the use of the markdown file. 
[✉️]: kjhallam321@gmail.com "Email"

`;
}

module.exports = generateMarkdown;
