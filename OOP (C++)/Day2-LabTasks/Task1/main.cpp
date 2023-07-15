#include <iostream>

using namespace std;

int main()
{
    //Assignment1
    int degree;

    cout << "Please, Enter your degree: ";
    cin >> degree;

    if (85 <= degree && degree <= 100)
        cout << "Your grade is A" << endl << endl;
    else if (75 <= degree && degree < 85)
        cout << "Your grade is B" << endl << endl;
    else if (65 <= degree && degree < 75)
        cout << "Your grade is C" << endl << endl;
    else if (60 <= degree && degree < 65)
        cout << "Your grade is D" << endl << endl;
    else if (degree < 60)
        cout << "Your grade is F" << endl << endl;
    else
        cout << "Not Evaluated" << endl << endl;

    //Assignment2
    char choice;
    char cont;
    int totalCost = 0;

    cout << "Menu" << endl << "a- Chicken" << endl << "b- Meat" << endl << "c- Sea Food" << endl << "d- Beverage" << endl;

    do
    {
        cout << "Please, Enter your choice: ";
        cin >> choice;
        switch(choice)
        {
        case 'a':
        case 'A':
            totalCost += 200;
            cout << totalCost << " L.E." << endl;
            break;
        case 'b':
        case 'B':
            totalCost += 350;
            cout << totalCost << " L.E." << endl;
            break;
        case 'c':
        case 'C':
            totalCost += 250;
            cout << totalCost << " L.E." << endl;
            break;
        case 'd':
        case 'D':
            totalCost += 50;
            cout << totalCost << " L.E." << endl;
            break;
        default:
            cout << "Not valid choice" << endl;
            break;
        }
        cout << "Please, press y if you want another choice or any other key if you want to exit: ";
        cin >> cont;
    }
    while (cont == 'y');


    //Assignment3
    int sum = 0;
    int input;

    for (int i = 0; i < 10; i++)
    {
        cout << "Please, enter number " << i+1 << endl;
        cin >> input;
        sum += input;
    }
    cout << "Sum is: " << sum << endl;

    //Assignment4

    for(int i = 1; i <= 2; i++)
    {
        int num;
        int sum2 = 0;
        cout << "Please, enter number: ";
        cin >> num;
        sum2 += num;

        while (sum2 <= 100 && num != 0)
        {
            cout << "Please, enter number: ";
            cin >> num;
            sum2 += num;
        }
        cout << sum2 << endl;
    }

    //Assignment5
    int num2;
    int sum3 = 0;

    do
    {
        cout << "Please, enter number: ";
        cin >> num2;
        sum3 += num2;
    }
    while (num2 != 0);

    cout << sum3;

    return 0;
}
