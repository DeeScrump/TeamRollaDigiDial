// import inquirer from 'inquirer';
const inquirer = require('inquirer');
const fs = require('fs');
var array = [];



var header = 
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./index.css">
  <title>My Team Profile</title>
</head>

<body>

  <div class="jumbotron jumbotron-fluid bg-primary">
    <div class="container">
      <h1 class="display-4 text-center">My Team!</h1>
    </div>
  </div>

  <div class='card-group w-50 container-fluid'>

`

var footer = 
`
  </div>
</body>
</html>
`


var main = ``





// const generateHTML = (array) =>
//   `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
//     <title>My Team Profile</title>
//   </head>
//   <body>
//     <div class="jumbotron jumbotron-fluid bg-primary">
//     <div class="container">
//       <h1 class="display-4 text-center">My Team!</h1>
//     </div>
//   </div>
  
  
 

//   // <div class="card border" style="width: 18rem;">
//   //   <div class="card-body p-0">
//   //     <div class="card bg-danger">
//   //     <h5 class="card-title bg-danger">${array[0].name}</h5>
//   //     <h6 class="card-subtitle mb-2 text-muted">${array[0].newMember}</h6>
//   //     </div>
//   //     <ul class="list-group list-group-flush">
//   //         <li class="list-group-item border-0">${array[0].key}:${array[0].id}</li>
//   //         <li class="list-group-item border-0">${array[0].email}</li>
//   //         <li class="list-group-item border-0">${array[0].office}</li>
//   //     </ul>
//   //   </div>
//   // </div>
  
//   </body>
//   </html>
  
// `;

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



var count  = 0;
function init() {
   if(count == 0){
    console.log('Start Building Your Team');
    inquirer.prompt(initialQuestions)
    .then(answers =>{
      answers["newMember"] = 'Manager'
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
            answers["newMember"] = 'Engineer'
            array.push(answers)
            init()
          })
        }else if(answers.newMember ==="Intern"){
          inquirer.prompt(internQuestions)
          .then(answers =>{
            answers["newMember"] = 'Intern'
            array.push(answers)
            init()
          })
        }else{
          
          console.log("Done adding members")
          const htmlPageContent = generateHTML(array);
         
          console.log(array);
          var result = data(array);
          var test = header +result +footer;
          
          fs.writeFile('dist/index.html',test, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
          );
          // console.log(result)
        }
    }) 
   }
  
}

function data(array){
  var div = ""
  array.forEach(function(element){
    var target = Object.values(element)
    var last = target[target.length-2];
    var re =   
      `
      <div class="card border" style="width: 18rem;">
        <div class="card-body p-0">
          <div class="card bg-danger">
          <h5 class="card-title bg-danger">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${element.newMember}</h6>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item border-0">Id: ${element.id}</li>
              <li class="list-group-item border-0">Email: <a href="mailto:${element.email}">${element.email}</a></li>
              <li class="list-group-item border-0">${last}</li>
          </ul>
        </div>
      </div>
      `
      div+=re;
  })

  return div;
}

init();