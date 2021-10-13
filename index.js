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
    name: 'office',
    message: `What is the team manager's office number?`,
    },
    {
    type: 'list',
    name: 'newMember',
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    message: 'Which type of team member would you like to add?',
    },
];

const engineerQuestions = [
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
    name: 'github',
    message: `What is the engineer's Github username?`,
    },
    {
    type: 'list',
    name: 'newMember',
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    message: 'Which type of team member would you like to add?',
    },
];

const internQuestions = [
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
    name: 'school',
    message: `What is the intern's school?`,
    },
    {
    type: 'list',
    name: 'newMember',
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    message: 'Which type of team member would you like to add?',
    },
];
    
// function endTeam (choice) {
//     while(choice !== '')
// }




function init() {

    inquirer
    .prompt(initialQuestions)
    .then((answers) => {
          console.log(answers)
        //get the choice from answers
        //call a function that will prompt the next set of questions

        // const htmlPageContent = generateHTML(answers);

        // fs.writeFile('dist/index.html', htmlPageContent, (err) =>
        // err ? console.log(err) : console.log('Successfully created index.html!')
        // );
    }); 
}

init();
