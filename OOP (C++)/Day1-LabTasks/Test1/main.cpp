#include <iostream>

using namespace std;

int main()
{
    char c;
    int ascii;

    cout << "Enter a character: ";
    cin >> c;
    cout << "ASCII Value of " << c << " is " << int(c) << endl;

    cout << "Enter ASCII code: ";
    cin >> ascii;
    cout << "Char. Value of " << ascii << " is " << char(ascii) << endl;

    return 0;
}
