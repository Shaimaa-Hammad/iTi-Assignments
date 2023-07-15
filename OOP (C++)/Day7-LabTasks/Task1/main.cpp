#include <iostream>

using namespace std;

class Complex
{
    float real;
    float imag;

public:
    // Default constructor
    Complex() {
    cout << "I'm default constructor! --> ";
    }

    //Overloaded constructor
    /*Complex(float f)
    {
        real = f;
        imag = f;
        cout << "I'm overloaded constructor! --> ";
    }*/

    //Overloaded constructor
    Complex(float f1, float f2 = 0.0)
    {
        if (f2 == 0)
        {
            real = f1;
            imag = f1;
        }
        else
        {
            real = f1;
            imag = f2;
        }
        cout << "I'm overloaded constructor! --> ";
    }

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

    // Function to print the complex number
    void print()
    {
        bool realZero = (real == 0);
        bool imagZero = (imag == 0);
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
        else if (imag >= 0)
        {
            cout << real << " + " << imag << "i" << endl;
        }
        else
        {
            cout << real << " - " << -imag << "i" << endl;
        }
    }
};

// Function prtotype for sum
Complex sum(Complex, Complex);

// Function prototype for overloaded sum
Complex sum(Complex, float);

// Function prototype for overloaded sum
Complex sum(float, Complex);

// Function prototype for overloaded sum
Complex sum(Complex, Complex, Complex);

// Function prototype for subtract
Complex subtract(Complex, Complex);

int main()
{
    float f1, f2;

    cout << "Enter float number: ";
    cin >> f1;

    Complex oc1(f1);
    oc1.print();

    cout << "Enter another float number: ";
    cin >> f2;

    Complex oc2(f1, f2);
    oc2.print();

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
    Complex c3 = sum(c1, c2);
    cout << "c3 = ";
    c3.print();
    cout << " --> c1 + c2 " << endl;

    //compute the sum of complex and float numbers
    cout << "Enter float number:  ";
    cin >> f1;

    Complex c4 = sum(c1, f1);
    cout << "c4 = ";
    c4.print();
    cout << " --> c1 + the float number " << f1 << endl;

    //compute the sum of float and complex numbers
    cout << "Enter float number:  ";
    cin >> f1;

    Complex c5 = sum(c1, f1);
    cout << "c5 = ";
    c5.print();
    cout << " --> c1 + the float number " << f1 << endl;

    //compute the sum of three complex numbers
    Complex c6 = sum(c1, c2, c3);
    cout << "c6 = ";
    c6.print();
    cout << " --> c1 + c2 + c3 " << endl;

    // Compute the difference of the two complex numbers
    Complex c7 = subtract(c1, c2);
    cout << "c7 = ";
    c7.print();
    cout << " --> c1 - c2 " << endl;

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

// Stand-alone function to sum two complex numbers
Complex sum(Complex c1, Complex c2)
{
    Complex result;
    result.setReal(c1.getReal() + c2.getReal());
    result.setImag(c1.getImag() + c2.getImag());
    return result;
}

// Stand-alone overloaded function to sum two complex numbers
Complex sum(Complex c, float f)
{
    Complex result;
    result.setReal(c.getReal() + f);
    result.setImag(c.getImag());
    return result;
}

// Stand-alone overloaded function to sum two complex numbers
Complex sum(float f, Complex c)
{
    Complex result;
    result.setReal(c.getReal() + f);
    result.setImag(c.getImag());
    return result;
}

// Stand-alone overloaded function to sum two complex numbers
Complex sum(Complex c1, Complex c2, Complex c3)
{
    Complex result;
    result.setReal(c1.getReal() + c2.getReal() + c3.getReal());
    result.setImag(c1.getImag() + c2.getImag() + c3.getImag());
    return result;
}
