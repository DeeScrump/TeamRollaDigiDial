class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
     }

    printInfo() {
        console.log(name);
        console.log(id);
        console.log(email);
    }
}

module.exports = Employee;