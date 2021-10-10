const inquirer = require('inquirer');
const db = require('./db');
const connection = require('./db/connection');


const startTracker = () => {
    inquirer.prompt({
        name: `action`,
        type: `list`,
        message: `Please choose what you will do`,
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Update Role",
            "Add Department",
            "Add New Employee",
            "Delete Employee",
            "Quit"
        ]
    })
        .then((answer) => {
            switch (answer.action) {
                case "View All Employees":
                    displayAllEmployees();
                    break;

                case "View All Departments":
                    displayAllDept();
                    break;

                case "View All Roles":
                    displayRoles;
                    break;

                case "Update Role":
                    updateRole();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add New Employee":
                    addNewEmployee();
                    break;

                case "Delete Employee":
                    deleteEmployee();
                    break;

                case "Quit":
                    endTracker();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        })
}

function displayAllEmployees() {
db.findAll()
}
function displayAllDept() {

}

function displayRoles() {

}
async function updateRole() {

}
function addDepartment() {

}
function addNewEmployee() {

}
function deleteEmployee() {

}
function endTracker() {
    connection.end();
    console.log('Thanks for using Employee Tracker!');
}