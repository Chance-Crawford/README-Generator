// TODO: Include packages needed for this application

const fs = require("fs");

const inquirer = require("inquirer");

// questions for inquirer to prompt.
// inquirer has them go one at a time starting
// at first object.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        // built into inquirer for validation logic, accepts boolean.
        // function parameter throws in the users input to the question.
        // in this case, checks to see
        // if user input is blank
        validate: titleInput =>{
            if(titleInput){
              return true;
            }
            else{
              console.log("Please enter a title!");
              return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project:",
        validate: desc =>{
            if(desc){
              return true;
            }
            else{
              console.log("Please enter a description!");
              return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "sections",
        message: "Which sections would you like to add to the README.md?",
        choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions", "Website"]
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation info:",
        validate: install =>{
            if(install){
              return true;
            }
            else{
              console.log("Please enter installation info!");
              return false;
            }
        },
        // passes an object of all of the answers given so far in this array.
        // as properties.
        // makes sure this question only runs when installation was checked as
        // a choice in the
        // question above.
        when: ({ sections }) => {
            // the checkbox question in inquirer returns an array,
            // we are checking if the array contains the choice "Installation".
            if (sections.includes("Installation")) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions:",
        validate: usage =>{
            if(usage){
              return true;
            }
            else{
              console.log("Please enter usage instructions!");
              return false;
            }
        },
        // passes an object of all of the answers given so far in this array.
        // as properties.
        // makes sure this question only runs when installation was checked as
        // a choice in the
        // question above.
        when: ({ sections }) => {
            // the checkbox question in inquirer returns an array,
            // we are checking if the array contains the choice "Installation".
            if (sections.includes("Usage")) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "What is the license of your project? Choose one.",
        choices: ["MIT", "GPL 3.0", "Apache", "GPL 2.0", "BSD"],
        validate: license =>{
            if(license.length === 1){
              return true;
            }
            else{
              return false;
            }
        },
        when: ({ sections }) => {
            // the checkbox question in inquirer returns an array,
            // we are checking if the array contains the choice "Installation".
            if (sections.includes("License")) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contributing instructions:",
        validate: cont =>{
            if(cont){
              return true;
            }
            else{
              console.log("Please enter contributing instructions!");
              return false;
            }
        },
        when: ({ sections }) => {
            if (sections.includes("Contributing")) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter tests for your application and examples on how to run them:",
        validate: tests =>{
            if(tests){
              return true;
            }
            else{
              console.log("Please enter test instructions!");
              return false;
            }
        },
        when: ({ sections }) => {
            if (sections.includes("Tests")) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter a way to contact you for questions:",
        validate: questions =>{
            if(questions){
              return true;
            }
            else{
              console.log("Please enter a contact method for questions!");
              return false;
            }
        },
        when: ({ sections }) => {
            if (sections.includes("Questions")) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: "input",
        name: "website",
        message: "Please enter a link to your deployed website:",
        validate: website =>{
            if(website){
              return true;
            }
            else{
              console.log("Please enter website link!");
              return false;
            }
        },
        when: ({ sections }) => {
            if (sections.includes("Website")) {
              return true;
            } else {
              return false;
            }
        }
    }
];



// function to write README file
function writeToFile(fileName, data) {}

// uses inquirer to go through array of question objects and prompt the user
function promptQuestions(){
    // inquirer returns a promise which can THEN be turned into an object containing
    // the users answer to each question as the value of a key value pair.
    // ex. { title: my-project, description: "a project i made" }
    return inquirer.prompt(questions);
}


// events
promptQuestions().then(data => {console.log(data);});
