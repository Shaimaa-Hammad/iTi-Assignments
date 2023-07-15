#include <iostream>
#include <algorithm>
#define SIZE 10
#define STD 3
#define SUB 4

using namespace std;

int main()
{
    //Assighnment1
    int x[10];
    int sum = 0;

    for(int i=0; i < 10; i++)
    {
        cout << "Please, enter number " << i + 1 <<":  ";
        cin >> x[i];
        sum += x[i];
    }
    cout << "Sum. is:  " << sum << endl << endl;

    //Assignment2
    int y[SIZE];
    char oper;
    int sum2 = 0, mult = 1;

    for(int i = 0; i < SIZE; i++)
    {
        cout << "Please, enter number " << i + 1 <<":  ";
        cin >> y[i];
    }

    cout << "Press s to add your previous numbers, m to multiply your previous numbers or o to order your previous numbers in ascending order:  ";
    cin >> oper;

    switch(oper)
    {
    case 's':
    case 'S':
        for(int i = 0; i < SIZE; i++)
            sum2 += y[i];
        cout << "Sum. is:  " << sum2 << endl;
        break;
    case 'm':
    case 'M':
        for(int i = 0; i < SIZE; i++)
            mult *= y[i];
        cout << "Mult. is:  " << mult << endl;
        break;
    case 'o':
    case 'O':
        sort(y, y + SIZE);

        for (int i = 0; i < SIZE; ++i)
            cout << y[i] << " ";
        break;
    default:
        cout << "Invalid Input!" << endl;
        break;
    }

    //Assignment3
    int marks[STD][SUB];
    int totals[STD] = {0};
    float avgs[SUB] = {0};
    int maxIndex = 0;
    int i,j;

    for(i=0; i<STD; i++)
    {
        for(j=0; j<SUB; j++)
        {
            cout << "Please, enter the mark of student " << i+1 << " in subject " << j+1 << ":  ";
            cin >> marks[i][j];
            totals[i] += marks[i][j];
        }
        //Display total of marks for each student
        cout << "Total marks of std." << i+1 << " is:  " << totals[i] << endl << endl;
    }

    //Find the student whose total marks is the highest
    for (i = 1; i < STD; i++)
    {
        if (totals[i] > totals[maxIndex])
            maxIndex = i;
    }
    cout << "The student who has the highest total marks is student " << maxIndex+1 << " with total of " << totals[maxIndex] << endl << endl;

    for(j=0; j<SUB; j++)
    {
        for(i=0; i<STD; i++)
        {
            avgs[j] += marks[i][j];
        }
        //Calculate final avg.
        avgs[j] /= STD;
        //Display final avg. for each subject
        cout << "Average marks of sub." << j+1 << " is:  " << avgs[j] << endl;
    }

    return 0;
}
