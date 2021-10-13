const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const {newEngineer,newEngineers, listOfEngineers} = require('./lib/engineer');
const intern = require('./lib/intern');

const content = [];

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


// function init() {


//    inquirer.start();
    // inquirer
    // .prompt(initialQuestions)
    // .then((answers) => {
    //       console.log(answers)
        //get the choice from answers
        //call a function that will prompt the next set of questions

        // const htmlPageContent = generateHTML(answers);

        // fs.writeFile('dist/index.html', htmlPageContent, (err) =>
        // err ? console.log(err) : console.log('Successfully created index.html!')
        // );
    // }); 
// }

// init();

// function init(){
//   console.log('Build your team!');
// }
// init();

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
  {
  type: 'list',
  name: 'newMember',
  choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
  message: 'Which type of team member would you like to add?',
  },
];

function init() {
  inquirer.prompt(initialQuestions)
  .then(answers => {
      const newManager = new manager(answers.name, answers.id, answers.email, answers.officeNo);
      console.log(newManager);
      if(answers.newMember === 'Engineer'){
        newEngineers();
      }
  })
}

 init();
