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
                    updateRole();
                    break;

                // case "Add Department":
                //     addDepartment();
                //     break;

                // case "Add New Employee":
                //     addNewEmployee();
                //     break;

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
db.displayAllEmployees()
.then(([rows]) => {
    let data = rows;
    console.log('\n ');
    console.table(data);
    console.log('\n ');
    startTracker()
})
}
function displayAllDept() {
    db.displayAllDept()
    .then(([rows]) => {
        let data = rows;
        console.log('\n ');
        console.table(data);
        console.log('\n ');
        startTracker()
    })
}

function displayRoles() {
    db.displayRoles()
    .then(([rows]) => {
        let data = rows;
        console.log('\n ');
        console.table(data);
        console.log('\n ');
        startTracker()
    })
}
async function updateRole() {
    db.displayAllEmployees().then(allEmployees => {
        return allEmployees
    })
    .then(employees => {
        db.displayRoles().then(displayRoles => {
            return {employees, displayRoles}
        }).then(employeeData => {
            console.log(employeeData.displayRoles [0][0])
            // console.log(employeeData.employees [0])
            inquirer.prompt([{
                type: 'list',
                name: 'id',
                message: 'Which employee?',
                choices: employeeData.employees[0].map(employee => ({name: employee.first_name, value: employee.id}))
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'Employee id?',
                choices: employeeData.displayRoles[0].map(role => ({name: role.Role, value: role.Id}))
            }]).then(updateRole => {
                // console.log(updateRole)
                return db.updateRole(updateRole.role_id, updateRole.id)
            }).then(response => {
                // console.log('done')
                startTracker();
            })
        })
    })
}
// function addDepartment() {
//     db.addDepartment()
//     .then(([rows]) => {
//         let data = rows;
//         console.log('\n ');
//         console.table(data);
//         console.log('\n ');
//         startTracker()
//     })
// }
// function addNewEmployee() {
//     db.addNewEmployee()
//     .then(([rows]) => {
//         let data = rows;
//         console.log('\n ');
//         console.table(data);
//         console.log('\n ');
//         startTracker()
//     })
// }
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