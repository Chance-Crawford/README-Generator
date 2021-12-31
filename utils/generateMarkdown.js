// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answerObj) {

  // if there is no license added by user,
  // return empty string
  if(!answerObj.hasOwnProperty("license")){
    return ``;
  }

  let license = answerObj.license[0];

  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if(license === "GPL 3.0"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if(license === "GPL 2.0"){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if(license === "BSD"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else{
    return ``;
  }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answerObj) {

  let license = answerObj.license[0];

  if(license === "MIT"){
    return `https://opensource.org/licenses/MIT`;
  }
  else if(license === "GPL 3.0"){
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  else if(license === "Apache"){
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  }
  else if(license === "GPL 2.0"){
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
  }
  else if(license === "BSD"){
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
  else{
    return ``;
  }

}



// a function that returns the sections based
// on whether the user added them or not, if not returns empty string
function renderSections(answerObj) {
  let sectionString = ``;

  // if user chose to not add any sections, return empty
  // string
  if(answerObj.sections.length < 1){
    return ``;
  }

  let tableOfContents = `
  ## Table Of Contents 
  `;

  // checks if the user selected to include the section
  // by seeing if it is a property
  // within the object
  if(answerObj.hasOwnProperty("installation")){
    tableOfContents += `
  * [Installation](#installation)  
    `;

    sectionString += `
  ## Installation
  ${answerObj.installation}
    `; 
  }


  if(answerObj.hasOwnProperty("usage")){
    tableOfContents += `
  * [Usage](#usage)
    `;

    sectionString += `
  ## Usage
  ${answerObj.usage}
    ` 
  }


  if(answerObj.hasOwnProperty("license")){
    tableOfContents += `
  * [License](#license)
    `;

    sectionString += `
  ## License
  ${answerObj.license}
  ${renderLicenseLink(answerObj)}
    ` 
  }

  if(answerObj.hasOwnProperty("contributing")){
    tableOfContents += `
  * [Contributing](#contributing)
    `;

    sectionString += `
  ## Contributing
  ${answerObj.contributing}
    ` 
  }


  if(answerObj.hasOwnProperty("tests")){
    tableOfContents += `
  * [Tests](#tests)
    `;

    sectionString += `
  ## Tests
  ${answerObj.tests}
    ` 
  }


  if(answerObj.hasOwnProperty("questions")){
    tableOfContents += `
  * [Questions](#questions)
    `;

    sectionString += `
  ## Questions
  ${answerObj.questions}
    ` 
  }


  if(answerObj.hasOwnProperty("website")){
    tableOfContents += `
  * [Website](#website)
    `;

    sectionString += `
  ## Website
  ${answerObj.website}
    ` 
  }


  // returns string with all sections added that the user chose
  return tableOfContents + sectionString;
}



// a function to generate markdown for README
function generateMarkdown(answerObj) {

  console.log(answerObj);

  return `
  # ${answerObj.title}
  ${renderLicenseBadge(answerObj)}

  ## Description
  ${answerObj.description}
  ${renderSections(answerObj)}
  `;
}

module.exports = generateMarkdown;
