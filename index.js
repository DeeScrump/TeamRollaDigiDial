const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team!</h1>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
  </div>
</div>
</body>
</html>
`;

const generateQuestions = [
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
    type: 'checkbox',
    name: 'newMember',
    choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    message: 'Which type of team member would you like to add?',
    },
    {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
    },
];
    

function init() {

    inquirer
    .prompt(generateQuestions)
    .then((answers) => {
        fs.writeFile(fileName, READmeContent, (err) =>
            err ? console.log(err) : console.log('Check out your README file!')
        );  
    }); 
}

init();
