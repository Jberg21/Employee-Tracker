INSERT INTO department (department_name)
VALUES 
("Managers"), -- 1
("Technology"), --2
("Customer Service"); --3

INSERT INTO role (title, salary, department_id)
VALUES
("Project Management Lead", "250000", 1), -- 1
("Project Manger", "200000", 1), -- 2
("Project Coordinator", "150000", 1), -- 3
("Technology Specialist", "100000", 2), -- 4
("Technology Support", "60000", 2), -- 5
("Customer Service Manager", "50000", 3), -- 6
("Customer Service Rep", "40000", 3); -- 7

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("David", "Hatch", 1, null), -- 1 
("Justin", "Berg", 2, 1), -- 2 
("Wes", "Wilson", 3, null), -- 3 
("Seth", "Robertson", 3, 3), -- 4 
("Kyle", "Griffis", 4, 3), -- 5
("Leslee", "Perkins", 3, 1), -- 6
("Chance", "Russell", 2, 3), -- 7
("Rebecca", "Roberts", 5, 3), -- 8
("Zack", "Byers", 6, 2), -- 9
("Jackie", "Shepard", 7, 9), --10
("Felix", "Green", 7, 9) -- 11
;