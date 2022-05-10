import {Employee} from "./Employee";
import {IEmployeeSalary} from "./IEmployeeSalary";

export class EmployeeSalary implements IEmployeeSalary {
    head: Employee;
    tail: Employee;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addEmployee(month, money): void {
        let employee = new Employee(month, money);
        if (!this.head) {
            employee.next = this.head;
            this.head = employee;
            if (!this.tail) {
                this.tail = employee;
            }
        } else {
            this.tail.next = employee;
            this.tail = employee;
            this.size++;

        }


    }

    maxMonthSalary() {
        let temp = this.head
        let max = temp.money
        while (temp != null) {
            if (max < temp.money) {
                max = temp.money
            }
            temp = temp.next
        }
        let maxMonth = []
        temp = this.head
        while (temp != null) {
            if (temp.money === max) {
                maxMonth.push(temp.ReadData())
            }
                temp = temp.next
        }
            return maxMonth;
    }
    showEmployee() {
        let temp=this.head;
        while(temp!=null){
            console.log(temp.ReadData());
            temp=temp.next;
        }
    }

    summarySalary(): number {
        let temp = this.head
        let total = 0
        while (temp!=null){
            total+= temp.money
            temp= temp.next
        }
        return total
    }
    deleteMonth(month:number){
        let temp = this.head;
        if (temp.month==month){
            this.head = temp.next;
            return;
        }else {
            while(temp!=null){
                if(temp.next.month==month){
                    temp.next = temp.next.next;
                    return;
                }
                if(temp.month==month){
                    this.head = temp;
                    return;
                }

                temp=temp.next;
            }
        }

    }
}