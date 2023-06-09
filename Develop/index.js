// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
}, {
    type: "input",
    message: "What is the description of your project?",
    name: "description"
},{
    type: "input",
    message: "How do you install your project?",
    name: "installation"
},{
    type: "input",
    message: "What is the purpose of this project?",
    name: "usage"
},{
    type: "input",
    message: "Who contributed to this project?",
    name: "contributers"
},{
    type: "input",
    message: "What license did you use?",
    name: "license"
},{
    type: "input",
    message: "What is your email?",
    name: "email"
},{
    type: "input",
    message: "What is your github account name?",
    name: "name"
},

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Successfully generated ${fileName}`);
      }
    });
  }
  

function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function generateReadme(answers) {
    return `
    # ${answers.title}
  
    ## Description
    ${answers.description}
  
    ## Table of Contents

    - [Installation](#installation)
    - [License](#license)
    - [Questions](#questions)

    ## Usage
    ${answers.usage}

    ## Contributers
    ${answers.contributers}

    ## Installation
    ${answers.installation}
  
    ## License
    ${answers.license}
  
    ## Questions
    Email: ${answers.email}
    GitHub: ${answers.name}
    `;
  }
  
init();
