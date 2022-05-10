"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
        this.next = null;
    }
    Student.prototype.readData = function () {
        return {
            name: this.name,
            score: this.score
        };
    };
    return Student;
}());
exports.Student = Student;
