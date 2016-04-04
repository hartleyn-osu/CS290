// A program intended to compute change in the fewest coins possible

#include <iostream>

int main()
{
   int changeNeeded;
   int quarters;
   int dimes;
   int nickels;
   int pennies;
   int remainderQ;
   int remainderD;
   int remainderN;
   int remainderP;

   // Prompt user to enter a number of cents, from 0 to 99
   
   std::cout << "Please enter an amount in cents less than a dollar." << std::endl;
   std::cin >> changeNeeded;

   // Computing the number of quarters and the remainder

   quarters = changeNeeded / 25;
   remainderQ = changeNeeded % 25;

   // Computing the number of dimes and the remainder

   dimes = remainderQ / 10;
   remainderD = remainderQ % 10;

   // Computing the number nickels and the remainder

   nickels = remainderD / 5;
   remainderN = remainderD % 5;  
   
   // Computing the number of pennies

   pennies = remainderN;

   // Output results

   std::cout << "Your change will be:" << std::endl;
   std::cout << "Q: " << quarters << std::endl;
   std::cout << "D: " << dimes << std::endl;
   std::cout << "N: " << nickels << std::endl;
   std::cout << "P: " << pennies << std::endl; 

   return 0;
}


