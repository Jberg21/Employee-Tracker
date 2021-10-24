INSERT INTO department (department_name)
VALUES 
("Managers"), 
("Technology"),
("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES
("Project Management Lead", "250000", 1),
("Project Manger", "200000", 1),
("Project Coordinator", "150000", 1),
("Technology Specialist", "100000", 2),
("Technology Support", "60000", 2),
("Customer Service Manager", "50000", 3),
("Customer Service Rep", "40000", 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("David", "Hatch", 1, null), 
("Justin", "Berg", 2, 1), 
("Wes", "Wilson", 3, null), 
("Seth", "Robertson", 3, 3), 
("Kyle", "Griffis", 4, 3),
("Leslee", "Perkins", 3, 1),
("Chance", "Russell", 2, 3),
("Rebecca", "Roberts", 5, 3),
("Zack", "Byers", 6, 2),
("Jackie", "Shepard", 7, 9),
("Felix", "Green", 7, 9)
;