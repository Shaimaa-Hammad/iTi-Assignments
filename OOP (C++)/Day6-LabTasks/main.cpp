#include <iostream>

using namespace std;

class Complex
{
    float real;
    float imag;

public:
    float getReal()
    {
        return real;
    }

    void setReal(float r)
    {
        real = r;
    }

    float getImag()
    {
        return imag;
    }

    void setImag(float i)
    {
        imag = i;
    }

    // Function to add two complex numbers
    Complex sum(Complex c)
    {
        Complex result;
        result.setReal(real + c.getReal());
        result.setImag(imag + c.getImag());
        return result;
    }

    // Function to print the complex number
    void print()
    {
        bool realZero = (real == 0);
        bool imagZero = (imag == 0);
        bool imagOne = (imag == 1);
        bool imagNegativeOne = (imag == -1);

        if (realZero && imagZero)
        {
            cout << "0" << endl;
        }
        else if (realZero)
        {
            cout << imag << "i" << endl;
        }
        else if (imagZero)
        {
            cout << real << endl;
        }
        else if (imagOne){
            cout << real << " + " << "i" << endl;
        }
        else if (imagNegativeOne){
            cout << real << " - " << "i" << endl;
        }
        else if (imag > 0)
        {
            cout << real << " + " << imag << "i" << endl;
        }
        else
        {
            cout << real << " - " << -imag << "i" << endl;
        }
    }
};


// Function prototype for subtract
Complex subtract(Complex, Complex);

int main()
{
    // Prompt the user to enter the real and imaginary parts of the two complex numbers
    float r, i;
    cout << "Enter the real part of the first complex number: ";
    cin >> r;
    cout << "Enter the imaginary part of the first complex number: ";
    cin >> i;
    Complex c1;
    c1.setReal(r);
    c1.setImag(i);

    cout << "Enter the real part of the second complex number: ";
    cin >> r;
    cout << "Enter the imaginary part of the second complex number: ";
    cin >> i;
    Complex c2;
    c2.setReal(r);
    c2.setImag(i);

    // Print the two complex numbers
    cout << "c1 = ";
    c1.print();
    cout << "c2 = ";
    c2.print();

    // Compute the sum of the two complex numbers
    Complex c3 = c1.sum(c2);
    cout << "c3 = ";
    c3.print();

    // Compute the difference of the two complex numbers
    Complex c4 = subtract(c1, c2);
    cout << "c4 = ";
    c4.print();

    return 0;
}

// Stand-alone function to subtract two complex numbers
Complex subtract(Complex c1, Complex c2)
{
    Complex result;
    result.setReal(c1.getReal() - c2.getReal());
    result.setImag(c1.getImag() - c2.getImag());
    return result;
}
