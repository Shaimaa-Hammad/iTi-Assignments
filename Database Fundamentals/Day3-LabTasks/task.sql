-----------------------1
SELECT d.Dnum, d.Dname, e.SSN, CONCAT(e.Fname, ' ', e.Lname) AS manager_name
FROM Departments d 
INNER JOIN employee e 
ON d.MGRSSN = e.SSN;

-----------------------2
SELECT d.Dname, p.Pname
FROM departments d
INNER JOIN project p ON d.Dnum = p.Dnum;

-----------------------3
SELECT d.*, CONCAT(e.Fname, ' ', e.Lname) AS emp_name
FROM dependent d 
INNER JOIN employee e 
ON d.ESSN = e.SSN;

-----------------------4
SELECT p.Pnumber, p.Pname, p.Plocation 
FROM project p
WHERE p.City IN ('Cairo', 'Alex');

-----------------------5
SELECT * 
FROM project 
WHERE Pname LIKE 'a%';

-----------------------6
SELECT * 
FROM employee 
WHERE Dno = 30 AND Salary BETWEEN 1000 AND 2000;

-----------------------7
SELECT CONCAT(e.Fname, ' ', e.Lname) AS emp_name
FROM employee e
INNER JOIN works_for w ON e.SSN = w.ESSn
INNER JOIN project p ON w.Pno = p.Pnumber
WHERE p.Dnum = 10 AND w.hours >= 10 AND p.Pname = 'AL Rabwah';

-----------------------8
SELECT CONCAT(emp.Fname, ' ', emp.Lname) AS emp_name
FROM employee emp 
INNER JOIN employee super
ON emp.Superssn = super.SSN
WHERE super.Fname + ' ' + super.Lname = 'Kamel Mohamed';

-----------------------9
SELECT CONCAT(e.Fname, ' ', e.Lname) AS emp_name, p.Pname 
FROM employee e 
INNER JOIN Works_for w 
ON e.SSN = w.ESSn 
INNER JOIN project p 
ON w.Pno = p.Pnumber 
ORDER BY p.Pname;

-----------------------10
SELECT p.Pnumber, d.Dname, e.Lname, p.Plocation, e.Bdate 
FROM project p 
INNER JOIN departments d 
ON p.Dnum = d.Dnum 
INNER JOIN employee e 
ON d.MGRSSN = e.SSN
WHERE p.City = 'Cairo';

-----------------------11
SELECT * 
FROM employee 
WHERE SSN IN (SELECT d.MGRSSN FROM departments d);

-----------------------12
SELECT * 
FROM employee 
LEFT JOIN dependent 
ON employee.SSN = dependent.ESSN;

-----------------------13
INSERT INTO employee (Fname, Lname, Salary, Dno, Superssn, SSN) 
VALUES ('Shaimaa', 'Hammad', 3000, 30, 112233, 102672);

-----------------------14
INSERT INTO employee (Fname, Lname, Dno, SSN) 
VALUES ('Asma', 'Mohammed', 30, 102660);

-----------------------15
UPDATE employee 
SET salary = salary * 1.2 
WHERE SSN = 102672;

-----------------------------------------------------------------------------

-----------------------1
SELECT d.Dependent_name, d.Sex
FROM Dependent d
WHERE d.ESSN IN (
    SELECT ssn
    FROM Employee
    WHERE Sex='F'
) AND d.sex='F'
UNION
SELECT d.Dependent_name, d.sex
FROM Dependent d
WHERE d.Essn IN (
    SELECT ssn
    FROM Employee
    WHERE Sex='M'
) AND d.sex='M';

-----------------------2
SELECT Pname, SUM(Hours) as total_hours
FROM Works_for, Project
WHERE Works_for.Pno = Project.Pnumber
GROUP BY Pname;

-----------------------3
SELECT *
FROM Departments d
WHERE d.Dnum = (
    SELECT Dno
    FROM Employee
    WHERE Ssn = (
        SELECT MIN(Ssn)
        FROM Employee
    )
);

-----------------------4
SELECT Dname, MAX(Salary) as max_salary, MIN(Salary) as min_salary, AVG(Salary) as avg_salary
FROM Departments, Employee
WHERE Dnum = Dno
GROUP BY Dname;

-----------------------5
SELECT TOP 2 Salary
FROM Employee
ORDER BY Salary DESC;

-----------------------6
SELECT CONCAT(e.Fname, ' ', e.Lname) AS emp_name
FROM Employee e
INTERSECT
SELECT Dependent_name
FROM Dependent;

-----------------------7
INSERT INTO Departments
VALUES ('DEPT IT', 100, 112233, '1-11-2006');

-----------------------8
UPDATE Departments
SET Mgrssn = 102672
WHERE Mgrssn = 968574 AND Dnum = 100;

UPDATE Departments
SET Mgrssn = 102672
WHERE Dnum = 20;

UPDATE Employee
SET Superssn = 102672
WHERE SSN = 102660;

-----------------------9
-- Check if Mr. Kamel Mohamed has dependents
SELECT * FROM dependent WHERE essn = '223344';

-- If there are dependents, delete them first
DELETE FROM dependent WHERE essn = '223344';

-- Check if Mr. Kamel Mohamed is a department manager
SELECT * FROM departments WHERE MGRSSN = '223344';

-- If Mr. Kamel Mohamed is a department manager, update the department manager to null
UPDATE departments SET MGRSSN = NULL WHERE MGRSSN = '223344';

-- Check if Mr. Kamel Mohamed supervises any employees
SELECT * FROM employee WHERE Superssn = '223344';

-- If Mr. Kamel Mohamed supervises any employees, update their supervisor to null
UPDATE employee SET superssn = NULL WHERE Superssn = '223344';

-- Check if Mr. Kamel Mohamed works on any projects
SELECT * FROM works_for WHERE essn = '223344';

-- If Mr. Kamel Mohamed works on any projects, delete his project assignments
DELETE FROM works_for WHERE essn = '223344';

-- Finally, delete Mr. Kamel Mohamed's data from the employees table
DELETE FROM employee WHERE ssn = '223344';
