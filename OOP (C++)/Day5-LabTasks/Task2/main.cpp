#include <iostream>
#include <string>

using namespace std;

// Define the Employee struct
struct Employee
{
    string name;
    int age;
    int salary;
};

void displayEmployeeByIndex(Employee[], int);
void updateEmployeeByIndex(Employee[], int);
void displayAllEmployees(Employee[], int);


int main()
{
    // Initialize an array of employees
    Employee employees[5] =
    {
        {"Yara", 30, 10000},
        {"Ahmed", 25, 7000},
        {"Rana", 40, 15000},
        {"Ali", 32, 10000},
        {"Dina", 28, 8500}
    };
    int choice;
    char cont;

    do
    {
        cout << "Choose one of the following:" << endl << "1- Display employee info. by index." << endl << "2- Update employee info. by index." << endl << "3- Display all employees' info." << endl << "Your choice is:  ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            displayEmployeeByIndex(employees, 5);
            break;
        case 2:
            updateEmployeeByIndex(employees, 5);
            break;
        case 3:
            displayAllEmployees(employees, 5);
            break;
        default:
            cout << "Invalid choice!" << endl;
            break;
        }
        /*if(choice == 1)
            displayEmployeeByIndex(employees, 3);
        else if(choice == 2)
            updateEmployeeByIndex(employees, 3);
        else if (choice == 3)
            displayAllEmployees(employees, 3);
        else
            cout << "Invalid choice!" << endl;*/
        cout << "Another choice?-->Press y if yes or any other letter to exit: ";
        cin >> cont;
    }
    while (cont == 'y' || cont == 'Y');

    return 0;
}

// Display employee info. by index
void displayEmployeeByIndex(Employee arr[], int size)
{
    int index;
    cout << "Enter the employee index (0-" << size-1 << ") you want to display his/her info.: ";
    cin >> index;
    if (index >= 0 && index < size)
    {
        cout << "Employee #" << index << ": " << endl;
        cout << "Name: " << arr[index].name << endl;
        cout << "Age: " << arr[index].age << endl;
        cout << "Salary: " << arr[index].salary << endl;
        cout << endl;
    }
    else
    {
        cout << "Invalid employee index." << endl;
    }
}

// Update employee info. at some index
void updateEmployeeByIndex(Employee arr[], int size)
{
    int index;
    cout << "Enter the employee index (0-" << size-1 << ") you want to update his/her info.: ";
    cin >> index;
    if (index >= 0 && index < size)
    {
        string newName;
        int newAge;
        double newSalary;
        cout << "Enter the new name: ";
        cin.ignore(); // ignore the newline character left in the buffer
        getline(cin, newName);
        cout << "Enter the new age: ";
        cin >> newAge;
        cout << "Enter the new salary: ";
        cin >> newSalary;
        arr[index].name = newName;
        arr[index].age = newAge;
        arr[index].salary = newSalary;
        cout << "Employee no." << index << " has been updated." << endl;
    }
    else
    {
        cout << "Invalid employee index." << endl;
    }
}

// Display all employees info
void displayAllEmployees(Employee arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << "Employee #" << i+1 << ": " << endl;
        cout << "Name: " << arr[i].name << endl;
        cout << "Age: " << arr[i].age << endl;
        cout << "Salary: " << arr[i].salary << endl;
        cout << endl;
    }
}
