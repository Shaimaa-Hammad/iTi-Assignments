SELECT * FROM employee;

SELECT Fname, Lname, salary, Dno 
FROM employee;

SELECT Project.Pname, Project.Plocation, departments.Dname 
FROM project
JOIN departments ON project.Dnum = departments.Dnum;

SELECT SSN, CONCAT(Fname, ' ', Lname) AS employee_name 
FROM employee 
WHERE salary > 1000;

SELECT SSN, CONCAT(Fname, ' ', Lname) AS employee_name 
FROM employee 
WHERE salary*12 > 10000;

SELECT Fname, Lname, salary 
FROM employee 
WHERE sex = 'F';

SELECT Dnum, Dname 
FROM departments 
WHERE MGRSSN = 968574;
