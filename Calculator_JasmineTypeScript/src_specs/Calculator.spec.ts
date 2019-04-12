import { Calculator } from "../src_client/Calculator";

describe("Calculator", () =>
{
    it("Add_SumTwoAndThree_ReturnsFive", () =>
    {
        // Arrange
        let calculator = new Calculator();

        // Act
        let actual = calculator.Add(2, 3);

        // Assert
        expect(actual).toEqual(5);
    });
});