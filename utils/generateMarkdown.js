// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// a function that returns the sections based
// on whether the user added them or not, if not returns empty string
function renderSections(answerObj) {
  let sectionString = ``;

  // if user chose to not add any sections, return empty
  // string
  if(answerObj.sections.length < 1){
    return ``;
  }

  // checks if the user selected to include the section
  // by seeing if it is a property
  // within the object
  if(answerObj.hasOwnProperty("installation")){
    sectionString += `
  ## Installation
  ${answerObj.installation}
    ` 
  }

  if(answerObj.hasOwnProperty("usage")){
    sectionString += `
  ## Usage
  ${answerObj.usage}
    ` 
  }

  if(answerObj.hasOwnProperty("license")){
    sectionString += `
  ## License
  ${answerObj.license}
    ` 
  }

  if(answerObj.hasOwnProperty("contributing")){
    sectionString += `
  ## Contributing
  ${answerObj.contributing}
    ` 
  }

  if(answerObj.hasOwnProperty("tests")){
    sectionString += `
  ## Tests
  ${answerObj.tests}
    ` 
  }

  if(answerObj.hasOwnProperty("questions")){
    sectionString += `
  ## Questions
  ${answerObj.questions}
    ` 
  }

  if(answerObj.hasOwnProperty("website")){
    sectionString += `
  ## Website
  ${answerObj.website}
    ` 
  }

  // returns string with all sections added that the user chose
  return sectionString;
}

// a function to generate markdown for README
function generateMarkdown(answerObj) {

  console.log(answerObj);

  return `
  # ${answerObj.title}

  ## Description
  ${answerObj.description}
  ${renderSections(answerObj)}
  `;
}

module.exports = generateMarkdown;
