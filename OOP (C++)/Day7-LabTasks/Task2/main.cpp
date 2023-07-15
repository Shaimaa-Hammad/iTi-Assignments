#include <iostream>

using namespace std;

class Stack
{
private:
    int *items;     // Pointer to dynamically allocated array to store the stack elements
    int top;        // Index of the first empty space in the stack
    int size;       // Current size of the stack
    static int counter; // Static counter attribute to keep track of the number of stack objects

public:
    //default constructor to initialize top to 0 and allocate memory for the stack
    Stack()
    {
        size =10;
        top = 0;
        items = new int[size];
        counter++;
    }

    // Overloaded constructor to initialize top to 0 and allocate memory for the stack
    Stack(int s)
    {
        size = s;
        top = 0;
        items = new int[size];
        counter++;
    }

    // Push an element onto the top of the stack
    void push(int value)
    {
        if (top == size)
        {
            int *newItems = new int[size*2];   // Allocate a new array with twice the capacity
            for (int i = 0; i < size; i++)
            {
                newItems[i] = items[i];              // Copy the elements from the old array to the new array
            }
            delete[] items;                        // Free the memory used by the old array
            items = newItems;                      // Set the items pointer to the new array
            size *= 2;                         // Update the size
        }
        items[top] = value;
        top++;
    }

    // Remove and return the element at the top of the stack
    int pop()
    {
        if (top == 0)
        {
            throw "Stack is empty!";
        }
        else
            top--;
        return items[top];
    }

    // Return true if the stack is empty, false otherwise
    bool isEmpty()
    {
        return top == 0;
    }

    // Return true if the stack is full, false otherwise
    bool isFull()
    {
        return top == size;
    }

    // Return the number of elements in the stack
    int getSize()
    {
        return size;
    }

    // Print the elements of the stack
    void printStack()
    {
        if (isEmpty())
        {
            cout << "Stack is empty!" << endl;
        }
        else
        {
            cout << "Stack contains: ";
            for (int i = top - 1; i >= 0; i--)
            {
                cout << items[i] << " ";
            }
            cout << endl;
        }
    }

    // Static method to return the number of stack objects created
    static int getCounter()
    {
        return counter;
    }

    // Destructor to free the dynamically allocated memory
    ~Stack()
    {
        delete[] items;
    }
};

int Stack::counter = 0;

int main()
{
    Stack s1;                // create a stack with default size

    int size2;
    cout << "Enter size of stack 2: ";
    cin >> size2;
    Stack s2(size2);             // create a stack with user-defined size

    for (int i = 0; i< s1.getSize(); i++)
    s1.push(i);              // push elements into s1

    s1.pop();
    s1.pop();

    for (int i = 0; i< s2.getSize(); i++)
    s2.push(i);              // push elements into s2

    s1.printStack();         // print elements of s1
    s2.printStack();         // print elements of s2

    cout << "Number of stack objects created: " << Stack::getCounter() << endl;
    return 0;
}
