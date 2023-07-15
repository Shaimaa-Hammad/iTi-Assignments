#include <iostream>
#include <algorithm>

#define SIZE 5

using namespace std;

void refill(int[], int);
void printSortedArray(int[], int);
void addToArray(int[], int);
float getAverage(int[], int);
void reverseArray(int[], int);
int getMin(int[], int);
int getMax(int[], int);

int main()
{
    int arr[SIZE] = {3, 10, 5, 1, 2};

    int choice;
    char cont;

    do
    {
        cout << "The original array is:  arr = {";
        for (int i = 0; i< SIZE-1; i++)
        {
            cout << arr[i] <<", ";
        }
        cout << arr[SIZE-1] << "}" << endl << endl;

        cout << "Choose one of the following:" << endl << "1- Refill array."
             << endl << "2- Print sorted array." << endl << "3- Update array content at some index."
             << endl << "4- Average of array content." << endl << "5- Reverse the array." << endl <<
             "6- Display min. value in the array." << endl << "7- Display max. value in the array."
             << endl << "Your choice is:  ";
        cin >> choice;
        switch(choice)
        {
        case 1:
            refill(arr, SIZE);
            break;
        case 2:
            printSortedArray(arr, SIZE);
            break;
        case 3:
            addToArray(arr, SIZE);
            break;
        case 4:
            cout << "Average: " << getAverage(arr, SIZE) << endl;
            break;
        case 5:
        {
            reverseArray(arr, SIZE);
            cout << "The reversed array is:  arr = {";
            for (int i = 0; i< SIZE-1; i++)
            {
                cout << arr[i] <<", ";
            }
            cout << arr[SIZE-1] << "}" << endl << endl;
            break;
        }
        case 6:
            cout << "Min: " << getMin(arr, SIZE) << endl;
            break;
        case 7:
            cout << "Max: " << getMax(arr, SIZE) << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
            break;
        }
        /*if(choice == 1)
            refill(arr, SIZE);
        else if(choice == 2)
            printSortedArray(arr, SIZE);
        else if (choice == 3)
            addToArray(arr, SIZE);
        else if (choice == 4)
            cout << "Average: " << getAverage(arr, SIZE) << endl;
        else if (choice == 5)
        {
            reverseArray(arr, SIZE);
            cout << "Reversed array: ";
            for (int i = 0; i < SIZE; i++)
            {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
        else if (choice == 6)
            cout << "Min: " << getMin(arr, SIZE) << endl;
        else if (choice == 7)
            cout << "Max: " << getMax(arr, SIZE) << endl;
        else
            cout << "Invalid choice!" << endl;*/
        cout << "Another choice?-->Press y if yes or any other letter to exit: ";
        cin >> cont;
    }
    while (cont == 'y' || cont == 'Y');

    return 0;
}


void refill(int arr[], int size)
{
    cout << "Enter " << size << " integers: ";
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
    cout << "The new array is:  arr = {";
    for (int i = 0; i< SIZE-1; i++)
    {
        cout << arr[i] <<", ";
    }
    cout << arr[SIZE-1] << "}" << endl << endl;
    // read and discard any extra input
    //cin.ignore(numeric_limits<streamsize>::max(), '\n');
}

void printSortedArray(int arr[], int size)
{
    sort(arr, arr + size);
    cout << "Sorted array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void addToArray(int arr[], int size)
{
    int index, value;
    cout << "Enter index to override its content (0-" << size-1 << "): ";
    cin >> index;
    cout << "Enter value: ";
    cin >> value;
    arr[index] = value;
    cout << "The new array is:  arr = {";
    for (int i = 0; i< SIZE-1; i++)
    {
        cout << arr[i] <<", ";
    }
    cout << arr[SIZE-1] << "}" << endl << endl;
}

float getAverage(int arr[], int size)
{
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
    }
    return (float) sum / size;
}

void reverseArray(int arr[], int size)
{
    for (int i = 0; i < size / 2; i++)
    {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}

int getMin(int arr[], int size)
{
    int min = arr[0];
    for (int i = 1; i < size; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}

int getMax(int arr[], int size)
{
    int max = arr[0];
    for (int i = 1; i < size; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}
