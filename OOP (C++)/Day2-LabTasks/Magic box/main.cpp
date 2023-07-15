#include <iostream>
#include<windows.h>

using namespace std;

//Defines gotoxy() for ANSI C compilers.
void gotoxy(short x, short y)
{
    COORD pos = {x, y};
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), pos);
}

int main()
{
    int n, row, col;
    cout << "Please enter number of rows & columns of magic box (must be odd and greater than 1):  ";
    cin >> n;

    /*if (n % 2 != 0 && n != 1)
    {
        row = 1;
        col = (n + 1) / 2;
        for (int i = 1; i <= n * n; i++)
        {
            gotoxy(col * 4, row * 2);
            cout << i;

            if (i % n != 0)
            {
                col--;
                row--;
                if(row < 1)
                    row = n;
                else if (row > n)
                    row = 1;
                if (col < 1)
                    col = n;
                else if(col > n)
                    col = 1;
            }
            else
            {
                row++;
                if (row > n)
                    row = 1;
            }
        }
    }*/

    if (n % 2 != 0 && n != 1)
    {

        for (int i = 1; i < n * n; i++)
        {
            if(i == 1)
            {
                row = 1;
                col = (n + 1) / 2;
                gotoxy(col * 4, row * 2);
                cout << i;
            }

            if (i % n != 0)
            {
                col--;
                row--;
                if(row < 1)
                    row = n;
                else if (row > n)
                    row = 1;
                if (col < 1)
                    col = n;
                else if(col > n)
                    col = 1;
                gotoxy(col * 4, row * 2);
                cout << i + 1;
            }
            else
            {
                row++;
                if (row > n)
                    row = 1;
                gotoxy(col * 4, row * 2);
                cout << i + 1;
            }
        }
    }

    else
        cout << "Error: Invalid number!";

    return 0;
}
