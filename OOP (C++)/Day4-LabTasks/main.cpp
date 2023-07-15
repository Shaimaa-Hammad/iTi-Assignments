#include <iostream>
#include <cstring>
#include <string>
#include <conio.h>
#include <sstream>

#define MAX_SIZE 10
#define NUM_STUDENTS 5
#define NUM_EMPLOYEES 5

using namespace std;

struct Address
{
    int buildingNumber;
    string streetName;
    string city;
};

struct Employee
{
    string name;
    int code;
    int age;
    double grossSalary;
    double profit;
    double tax;
    Address address;
};

int main()
{
    //Assignment1
    cout << "\nTask: Taking limited number of characters from user and display string.\n";
    int c = 0;
    int i = 0;
    char str[MAX_SIZE];

    cout << "Please, write characters (max of " << MAX_SIZE << "):  ";

    do
    {
        c = getche();
        str[i] = c;
        i++;
    }
    while(c != '\r' && strlen(str) < 10);
    cout << endl << "String formed from your characters is:  " << str << endl << endl;



    //Assignment2
    cout << "\nTask: Taking first and last names of students from user to display their full names and the longest name (Using cstring).\n";
    char firstNames[NUM_STUDENTS][10];
    char lastNames[NUM_STUDENTS][10];
    char fullNames[NUM_STUDENTS][25];
    int maxNameLength = 0;
    int maxNameIndex = 0;

    for (int i = 0; i < NUM_STUDENTS; i++)
    {
        cout << "Enter the first name of student " << i+1 << ": ";
        cin >> firstNames[i];

        cout << "Enter the last name of student " << i+1 << ": ";
        cin >> lastNames[i];

        // Concatenate the first and last names into the full name string
        strcpy(fullNames[i], firstNames[i]);
        strcat(fullNames[i], " ");
        strcat(fullNames[i], lastNames[i]);

        // Update the maximum name length and index
        int nameLength = strlen(fullNames[i]);
        if (nameLength > maxNameLength)
        {
            maxNameLength = nameLength;
            maxNameIndex = i;
        }
    }

    // Print the full names of all students
    cout << "\nThe full names of the students are:\n";
    for (int i = 0; i < NUM_STUDENTS; i++)
    {
        cout << fullNames[i] << endl;
    }

    // Print the student with the biggest name length
    cout << "\nThe student with the biggest name length is:\n";
    cout << fullNames[maxNameIndex] << endl << endl;



    //Assignment3
    cout << "\nTask: Taking first and last names of students from user to display their full names and the longest name (Using string).\n";
    string first_names[NUM_STUDENTS];
    string last_names[NUM_STUDENTS];
    string full_names[NUM_STUDENTS];
    int max_name_length = 0;
    int max_name_index = 0;

    for (int i = 0; i < NUM_STUDENTS; i++)
    {
        cout << "Enter the first name of student " << i+1 << ": ";
        cin >> first_names[i];

        cout << "Enter the last name of student " << i+1 << ": ";
        cin >> last_names[i];

        // Concatenate the first and last names into the full name string
        full_names[i] = first_names[i].append(" ").append(last_names[i]);

        // Update the maximum name length and index
        int name_length = full_names[i].length();
        if (name_length > max_name_length)
        {
            max_name_length = name_length;
            max_name_index = i;
        }
    }

    // Print the full names of all students
    cout << "\nThe full names of the students are:\n";
    for (int i = 0; i < NUM_STUDENTS; i++)
    {
        cout << full_names[i] << endl;
    }

    // Print the student with the biggest name length
    cout << "\nThe student with the biggest name length is:\n";
    cout << full_names[max_name_index] << endl << endl;



    //Assighnment4
    cout << "\nTask: Taking info. from user about some employees after structing Employee and Address structures.\n";
    Employee employees[NUM_EMPLOYEES];

    // Prompt the user to enter data for each employee
    for (int i = 0; i < NUM_EMPLOYEES; i++)
    {
        cout << "Enter the name, code, age, gross salary, profit, tax, building number, street name, and city of employee " << i+1 << ", separated by spaces: " << endl;
        string input;
        getline(cin, input);

        istringstream iss(input);

        iss >> employees[i].name >> employees[i].code >> employees[i].age >> employees[i].grossSalary >> employees[i].profit >> employees[i].tax >> employees[i].address.buildingNumber;
        getline(iss >> ws, employees[i].address.streetName);
        getline(iss >> ws, employees[i].address.city);
        cout << endl;
    }

    // Print the names, codes, and net salaries of all employees
    cout << "\nThe names, codes, ages, and net salaries of the employees respectively are:\n";
    for (int i = 0; i < NUM_EMPLOYEES; i++)
    {
        double netSalary = (employees[i].grossSalary + employees[i].profit) - employees[i].tax;
        cout << employees[i].name << " (" << employees[i].code << ")  " << employees[i].age << "years  " << netSalary << "pounds" << endl << endl;
        cout << "Address: " << employees[i].address.buildingNumber << " " << employees[i].address.streetName << ", " << employees[i].address.city;
        cout << endl << endl;
    }

    // Prompt the user to enter an employee code
    char choice = 'y';
    while (tolower(choice) == 'y')
    {
        int code;
        cout << "Enter an employee code to display their information: ";
        cin >> code;

        // Find the employee with the given code and display their information
        bool found = false;
        for (int i = 0; i < NUM_EMPLOYEES; i++)
        {
            if (employees[i].code == code)
            {
                double netSalary = (employees[i].grossSalary + employees[i].profit) - employees[i].tax;
                cout << employees[i].name << " (" << employees[i].code << ")  " << employees[i].age << " years  " << netSalary << " pounds" << endl << endl;
                cout << "Address: " << employees[i].address.buildingNumber << " " << employees[i].address.streetName << ", " << employees[i].address.city;
                cout << endl << endl;
                found = true;
                break;
            }
        }
        if (!found)
        {
            cout << "No employee with code " << code << " was found." << endl;
        }

        cout << "Do you want to find another employee? (y/n): ";
        cin >> choice;
        cout << endl;
    }

    cout << "\nTask: Taking info. from user about some employees after structing Employee and Address structures.\n";
    Employee employee[NUM_EMPLOYEES];

    // Prompt the user to enter data for each employee
    for (int i = 0; i < NUM_EMPLOYEES; i++)
    {
        cout << "Enter the name of employee " << i+1 << ": ";
        getline(cin, employee[i].name);

        cout << "Enter the code of employee " << i+1 << ": ";
        cin >> employee[i].code;

        cout << "Enter the gross salary of employee " << i+1 << ": ";
        cin >> employee[i].grossSalary;

        cout << "Enter the profit of employee " << i+1 << ": ";
        cin >> employee[i].profit;

        cout << "Enter the tax of employee " << i+1 << ": ";
        cin >> employee[i].tax;

        cout << "Enter the building number of employee " << i+1 << "'s address: ";
        cin >> employee[i].address.buildingNumber;

        cin.ignore();

        cout << "Enter the street name of employee " << i+1 << "'s address: ";
        getline(cin, employee[i].address.streetName);

        cout << "Enter the city of employee " << i+1 << "'s address: ";
        getline(cin, employee[i].address.city);
        cout << endl << endl;
    }

    // Print the names, codes, and net salaries of all employees
    cout << "\nThe names, codes, and net salaries of the employees respectively are:\n";
    for (int i = 0; i < NUM_EMPLOYEES; i++)
    {
        double netSalary = (employee[i].grossSalary + employee[i].profit) - employee[i].tax;
        cout << employee[i].name << " (" << employee[i].code << "): " << netSalary << endl;
        cout << "Address: " << employee[i].address.buildingNumber << " " << employee[i].address.streetName << ", " << employee[i].address.city;
        cout << endl << endl;
    }

    // Prompt the user to enter an employee code
    while (tolower(choice) == 'y')
    {
        int code;
        cout << "Enter an employee code to display their information: ";
        cin >> code;

        // Find the employee with the given code and display their information
        bool found = false;
        for (int i = 0; i < NUM_EMPLOYEES; i++)
        {
            if (employee[i].code == code)
            {
                double netSalary = (employee[i].grossSalary + employee[i].profit) - employee[i].tax;
                cout << employee[i].name << " (" << employee[i].code << ")  " << employee[i].age << " years  " << netSalary << " pounds" << endl << endl;
                cout << "Address: " << employee[i].address.buildingNumber << " " << employee[i].address.streetName << ", " << employee[i].address.city;
                cout << endl << endl;
                found = true;
                break;
            }
        }
        if (!found)
        {
            cout << "No employee with code " << code << " was found." << endl;
        }

        cout << "Do you want to find another employee? (y/n): ";
        cin >> choice;
        cout << endl;
    }

    return 0;
}
