import {EmployeeSalary} from "./EmployeeSalary";

let employeeSalary = new EmployeeSalary();

employeeSalary.addEmployee(4,189929999);
employeeSalary.addEmployee(5,18992665990);
employeeSalary.addEmployee(6,1899999);
employeeSalary.addEmployee(7,18000000);
employeeSalary.addEmployee(8,189900000);

// console.log(employeeSalary.showEmployee())
// employeeSalary.deleteMonth(8);
// employeeSalary.showEmployee();
console.log(employeeSalary.summarySalary());
console.log(employeeSalary.maxMonthSalary());


