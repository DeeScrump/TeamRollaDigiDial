// import inquirer from 'inquirer';
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <title>My Team Profile</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid bg-primary">
    <div class="container">
      <h1 class="display-4 text-center">My Team!</h1>
    </div>
  </div>
  
  <div class="card border" style="width: 18rem;">
    <div class="card-body p-0">
      <div class="card bg-danger">
      <h5 class="card-title bg-danger">${answers.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item border-0">${answers.id}</li>
          <li class="list-group-item border-0">${answers.email}</li>
          <li class="list-group-item border-0">${answers.office}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>
  
`;

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
];

const internQuestions = [
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
  name: 'school',
  message: `What is the employee's school?`,
  },
];

const initialQuestions = [
  {
  type: 'input',
  name: 'name',
  message: `What is the team manager's name?`,
  },
  {
  type: 'input',
  name: 'id',
  message: `What is the team manager's id?`,
  },
  {
  type: 'input',    
  name: 'email',
  message: `What is the team manager's email?`,
  },
  {
  type: 'input',
  name: 'officeNo',
  message: `What is the team manager's office number?`,
  },
 
];

const mchoice = [
  {
    type: 'list',
    name: 'newMember',
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    message: 'Which type of team member would you like to add?',
    },
]

var array = []

var count  = 0;
function init() {
   if(count == 0){
    inquirer.prompt(initialQuestions)
    .then(answers =>{
      var role ={"newMember":"Manager"}
      answers.push(role)
      array.push(answers)
      count++;
      init()
    })
   }
   if(count > 0){
    inquirer.prompt(mchoice)
     .then(answers =>{
        if(answers.newMember ==="Engineer"){
          inquirer.prompt(engineerQuestions)
          .then(answers =>{
            var role ={"newMember":"Engineer"}
            answers.push(role)
            array.push(answers)
            init()
          })
        }else if(answers.newMember ==="Intern"){
          inquirer.prompt(internQuestions)
          .then(answers =>{
            var role ={"newMember":"Intern"}
            answers.push(role)
            array.push(answers)
            init()
          })
        }else{
          
          console.log("Done adding members")
          console.log(array);
        }
    }) 
   }
  
}

init()