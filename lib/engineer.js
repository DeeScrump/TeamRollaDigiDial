const Employee = require('./employee');
var newEngineer = '';
const inquirer = require('inquirer');

const engineerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: `What is the employee's name?`,
    },
    {
    type: 'input',
    name: 'id',
    message: `What is the employee's id?`,
    },
    {
    type: 'input',
    name: 'email',
    message: `What is the employee's email?`,
    },
    {
    type: 'input',
    name: 'github',
    message: `What is the employee's Github username?`,
    },
    // {
    //   type: 'input',
    //   name: 'role',
    //   message: `What is the employee's role?`,
    // },
];

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub () {
        return github;
    }

    getRole() {
        return 'Engineer';
    }

   
}

function newEngineers() {
    inquirer.prompt(engineerQuestions)
    .then(answers =>{
        newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    }) 
}

// newEngineers();

module.exports = {
    newEngineer,
    newEngineers
}