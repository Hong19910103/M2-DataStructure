export class Student{
    name: string;
    score:number;
    next: Student;
    constructor(name:string,score:number) {
        this.name = name;
        this.score = score;
        this.next= null;
    }
    readData(){
        return {
            name:this.name,
            score: this.score
        }
    }
}