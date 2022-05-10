"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSalary = void 0;
var Employee_1 = require("./Employee");
var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    EmployeeSalary.prototype.addEmployee = function (month, money) {
        var employee = new Employee_1.Employee(month, money);
        if (!this.head) {
            employee.next = this.head;
            this.head = employee;
            if (!this.tail) {
                this.tail = employee;
            }
        }
        else {
            this.tail.next = employee;
            this.tail = employee;
            this.size++;
        }
    };
    EmployeeSalary.prototype.maxMonthSalary = function () {
        var temp = this.head;
        var max = temp.money;
        while (temp != null) {
            if (max < temp.money) {
                max = temp.money;
            }
            temp = temp.next;
        }
        var maxMonth = [];
        temp = this.head;
        while (temp != null) {
            if (temp.money === max) {
                maxMonth.push(temp.ReadData());
            }
            temp = temp.next;
        }
        return maxMonth;
    };
    EmployeeSalary.prototype.showEmployee = function () {
        var temp = this.head;
        while (temp != null) {
            console.log(temp.ReadData());
            temp = temp.next;
        }
    };
    EmployeeSalary.prototype.summarySalary = function () {
        var temp = this.head;
        var total = 0;
        while (temp != null) {
            total += temp.money;
            temp = temp.next;
        }
        return total;
    };
    EmployeeSalary.prototype.deleteMonth = function (month) {
        var temp = this.head;
        if (temp.month == month) {
            this.head = temp.next;
            return;
        }
        else {
            while (temp != null) {
                if (temp.next.month == month) {
                    temp.next = temp.next.next;
                    return;
                }
                if (temp.month == month) {
                    this.head = temp;
                    return;
                }
                temp = temp.next;
            }
        }
    };
    return EmployeeSalary;
}());
exports.EmployeeSalary = EmployeeSalary;
