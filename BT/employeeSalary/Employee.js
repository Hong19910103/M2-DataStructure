"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(month, money) {
        this.month = month;
        this.money = money;
    }
    Employee.prototype.ReadData = function () {
        return [
            this.month,
            this.money
        ];
    };
    return Employee;
}());
exports.Employee = Employee;
