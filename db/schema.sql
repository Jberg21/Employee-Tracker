DROP DATABASE IF EXISTS technology_employees;
CREATE DATABASE technology_employees;
USE technology_employees;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    foreign key (department_id)
    references department(id)
);


CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    department_id INTEGER NOT NULL,
    foreign key (department_id)
    references department(id)
    
    
);