const inquirer = require('inquirer');
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
     }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';  
    }

}

// function Prompt(){
//     inquirer.prompt([
//         {
//         type: 'list',
//         name: 'newMember',
//         choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
//         message: 'Which type of team member would you like to add?',
//         },
//       ])
//     .then(answers => {
//         content.push(answers);
//         if(answers.newMember === 'Engineer'){
//             new engineer()
//         }
//     })
// }

module.exports = Employee;