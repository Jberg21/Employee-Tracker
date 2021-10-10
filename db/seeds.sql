INSERT INTO department (name)
VALUES 
("Managers"), -- 1
("Technology"), --2
("Customer Service"); --3

INSERT INTO role (title, salary, department_id)
VALUES
("Project Management Lead", "250000", 1), -- 1
("Project Manger", "200000", 2), -- 2
("Project Coordinator", "150000", 2), -- 3
("Technology Specialist", "100000", 2), -- 4
("Technology Support", "60000", 3), -- 5
("Customer Service Manager", "50000", 3), -- 6
("Customer Service Rep", "40000", 3); -- 7

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("David", "Hatch", 1, null), -- 1 Attorney manager for Legal(1) 
("Justin", "Berg", 2, 1), -- 2 CFO manager for Admin(2)
("Justin", "Berg", 2, null), -- 3 CNO manager for all Nursing staff/Clinical(3) -- but her manager is the CMD
("Seth", "Robertson", 3, 3), -- 4 CMD manager for all MD's/Clinical(3)
("", "Charles", 4, 3), -- 5
("Brad", "West", 3, 1), -- 6
("Dave", "Child", 2, 3), -- 7
("Sione", "Keppner", 5, 3), -- 8
("Connor", "Gibbons", 6, 4), -- 9
("Ning", "Shep", 7, 4), --10
("Derek", "Brown", 7, 4) -- 11
;