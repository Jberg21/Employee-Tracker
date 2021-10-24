const inquirer = require('inquirer');
// const { start } = require('repl');
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
                    displayRoles();
                    break;

                case "Update Role":
                    updatedRole();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add New Employee":
                    addNewEmployee();
                    break;

                // case "Delete Employee":
                //     deleteEmployee();
                //     break;

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
.then(([rows]) => {
    let data = rows;
    console.log('\n ');
    console.table(data);
    console.log('\n ');
    startTracker()
})
}
function displayAllDept() {
    db.findDept()
    .then(([rows]) => {
        let data = rows;
        console.log('\n ');
        console.table(data);
        console.log('\n ');
        startTracker()
    })
}

function displayRoles() {
    db.findRole()
    .then(([rows]) => {
        let data = rows;
        console.log('\n ');
        console.table(data);
        console.log('\n ');
        startTracker()
    })
}
async function updatedRole() {
   let data = await inquirer.prompt({
       name: 'employeeID',
       type: 'input',
       message: 'What Employee ID needs updated?',
    })
    let role = await inquirer.prompt({
        name: 'roleId',
        type: 'input',
        message: 'What Role ID needs set?',
    })
    db.updateRole(data.employeeID, role.roleId);
    startTracker();
}
function addDepartment() {
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is the name of the new department?'
    }])
    .then(dept => {
         db.addDept(dept)
         startTracker();

    })
}
function addNewEmployee() {
    inquirer.prompt([{
        name: 'first_name',
        type: 'input',
        message: 'Please enter employees first name',
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'Please enter employee last name'
    },
    {
        name: 'role',
        type: 'input',
        message: 'Please enter in a role ID'
    },
    {
        name: 'manager',
        type: 'input',
        message: 'What is the manager ID'
    }
   
])
        .then(answer => {
            const data = [answer.first_name, answer.last_name, answer.role, answer.manager];
            console.log(data);
            db.addEmployee(data);
            startTracker();
                })
}
// function deleteEmployee() {
//     db.deleteEmployee()
//     .then(([rows]) => {
//         let data = rows;
//         console.log('\n ');
//         console.table(data);
//         console.log('\n ');
//         startTracker()
//     })
// }
function endTracker() {
    connection.end();
    console.log('Thanks for using Employee Tracker!');
}

startTracker();