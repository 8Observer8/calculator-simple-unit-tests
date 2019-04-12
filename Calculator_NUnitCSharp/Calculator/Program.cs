using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get input values
            Console.Write("A: ");
            float a = float.Parse(Console.ReadLine());
            Console.Write("B: ");
            float b = float.Parse(Console.ReadLine());

            var calculator = new Calculator();
            float result = calculator.Add(a, b);
            Console.WriteLine("Result = " + result);

            // Delay
            Console.ReadKey();
        }
    }
}
