// A program intended to convert temperatures in Celsius to Fahrenheit

#include <iostream>

int main()
{
   // Celsius temperature variable

   double tempC;

   // Celsius temperature input
   
   std::cout << "Please enter a Celsius temperature." << std::endl;
   std::cin >> tempC;

   // Compute and output converted temperature
   //
   // tempF is the Fahrenheit temperature variable
     
   double tempF = (1.8 * tempC) + 32;

   std::cout << "The equivalent Fahrenheit temperature is:" << std::endl;
   std::cout << tempF << std::endl;

   return 0;
}
