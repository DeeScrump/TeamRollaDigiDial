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