const Employee = require('./employee');

class Manager extends Employee {

    constructor(officeNo) {
        this.officeNo = officeNo;
    }
}