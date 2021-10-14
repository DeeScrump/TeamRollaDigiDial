const Employee = require('./employee');


class Intern extends Employee {

    constructor(name, id, email, school) {
        this.school = school;
        super(name, id, email);
    }

    getSchool() {
        return school;
    }

    getRole() {
        return 'Intern';
    }

}







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



// const employee = require('./lib/employee');
// const manager = require('./lib/manager');
// const {newEngineer,newEngineers, listOfEngineers} = require('./lib/engineer');
// const intern = require('./lib/intern');



for(var i = 0;i<5;i++){
    `
    <div class="card border" style="width: 18rem;">
    <div class="card-body p-0">
      <div class="card bg-danger">
      <h5 class="card-title bg-danger">${array[0].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${array[0].newMember}</h6>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item border-0">${array[0].id}</li>
          <li class="list-group-item border-0">${array[0].email}</li>
          <li class="list-group-item border-0">${array[0].office}</li>
      </ul>
    </div>
    </div>
    `
  };for(var i = 0;i<5;i++){
    `
    <div class="card border" style="width: 18rem;">
    <div class="card-body p-0">
      <div class="card bg-danger">
      <h5 class="card-title bg-danger">${array[0].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${array[0].newMember}</h6>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item border-0">${array[0].id}</li>
          <li class="list-group-item border-0">${array[0].email}</li>
          <li class="list-group-item border-0">${array[0].office}</li>
      </ul>
    </div>
    </div>
    `
  };



  var re =   
      `
      <div class="card border" style="width: 18rem;">
        <div class="card-body p-0">
          <div class="card bg-danger">
          <h5 class="card-title bg-danger">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${element.newMember}</h6>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item border-0">${element.id}</li>
              <li class="list-group-item border-0">${element.email}</li>
          </ul>
        </div>
      </div>
      `
      div+=re;