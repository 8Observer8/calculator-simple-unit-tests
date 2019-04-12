using NUnit.Framework;

namespace Calculator.UnitTests
{
    [TestFixture]
    public class CalculatorTests
    {
        [Test]
        public void Add_SumTwoAndThree_ReturnsFive()
        {
            // Arrange
            var calculator = new Calculator();

            // Act
            float actual = calculator.Add(2, 3);

            // Assert
            Assert.AreEqual(5, actual);
        }
    }
}
