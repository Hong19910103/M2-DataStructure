export class Employee {
    month: number;
    money: number;
    next: any;

    constructor(month: number,
                money: number) {

        this.month = month;
        this.money = money;

    }
    ReadData(){
        return [
            this.month,
            this.money
        ]
    }

}