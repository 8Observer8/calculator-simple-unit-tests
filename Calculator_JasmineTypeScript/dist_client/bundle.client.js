(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./Calculator":1}]},{},[2]);
