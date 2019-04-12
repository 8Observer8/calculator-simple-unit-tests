"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("../src_client/Calculator");
describe("Calculator", function () {
    it("Add_SumTwoAndThree_ReturnsFive", function () {
        // Arrange
        var calculator = new Calculator_1.Calculator();
        // Act
        var actual = calculator.Add(2, 3);
        // Assert
        expect(actual).toEqual(5);
    });
});
