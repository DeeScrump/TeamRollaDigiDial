const Employee = require('./employee');

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
    {
      type: 'input',
      name: 'role',
      message: `What is the employee's role?`,
    },
    // {
    // type: 'list',
    // name: 'newMember',
    // choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    // message: 'Which type of team member would you like to add?',
    // },
];

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