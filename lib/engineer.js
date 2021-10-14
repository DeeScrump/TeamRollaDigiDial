const Employee = require('./employee');
const inquirer = require('inquirer');
var newEngineer = '';
const listOfEngineers = [];

class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }   
}



function newEngineers() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        listOfEngineers.push(newEngineer);
        console.log("the object"+newEngineer.getRole());
    }) 

   
}




module.exports = {
    listOfEngineers,
    newEngineer,
    newEngineers
}