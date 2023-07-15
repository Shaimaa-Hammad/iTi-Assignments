#include <iostream>

using namespace std;

float pow(int, int);

int main()
{
    int x, y;
    cout << "Enter the basis number:  ";
    cin >> x;

    cout << "Enter the exponent number:  ";
    cin >> y;
    cout << x << " to the power of " << y << " is " << pow(x, y) << endl;

    return 0;
}

float pow(int base, int exponent)
{
    if (exponent == 0) {
        return 1;
    }

    float result = 1.0;
    int absExponent = abs(exponent);

    for(int i = 0; i < absExponent; i++)
        result *= base;

    if (exponent < 0) {
        return 1.0 / result;
    } else {
        return result;
    }
}
