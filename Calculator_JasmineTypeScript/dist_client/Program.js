"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        // Get input elements
        var inputA = document.getElementById("inputA");
        var inputB = document.getElementById("inputB");
        // Get the "result" element
        var result = document.getElementById("result");
        // Get the btnResult button
        var btnResult = document.getElementById("btnResult");
        var calculator = new Calculator_1.Calculator();
        btnResult.onclick = function () {
            var r = calculator.Add(parseFloat(inputA.value), parseFloat(inputB.value));
            result.innerHTML = r.toString();
        };
    };
    return Program;
}());
window.onload = function () { return Program.Main(); };
