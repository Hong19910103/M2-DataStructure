import {IScoreList} from "./IScoreList";
import {Student} from "./student";

export class ScoreList implements IScoreList {
    head: Student;
    tail: Student;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;

    }


    ShowList() {
        let showlist = [];
        let tempStudent = this.head;
        while (tempStudent!=null){
            showlist.push(tempStudent.readData());
            tempStudent= tempStudent.next;
        }
        return showlist;

    }

    findByName(name): any {
        let list=[];
        if (this.size) {
            let currentStudent = this.head;
            while (currentStudent != null) {
                if (currentStudent.name == name) {
                  list.push(currentStudent.readData());
                }
                currentStudent = currentStudent.next;
            }
           return list;
        }
    }

    insertFirst(name, score): void {
        let student = new Student(name, score);
        student.next = this.head;
        this.head = student;
        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    }

    insertLast(name, score): void {
        let student = new Student(name, score);
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            this.tail.next = student;
            this.tail = student;
            this.size++;
        }
    }

    listStudentMaxScore(): any {
        let list = [];
        let template = this.head;
        let max = template.score;
        while (template) {
            if (max < template.score) {
                max = template.score;
            }
            template = template.next;
        }
        template = this.head;
        while (template){
            if(template.score==max){
                list.push(template.readData());
            }
            template = template.next;
        }
        return list;
    }

    totalStudentsFail():any {
         let list = [];
         let tempFail = 5;
         let studentFail = this.head;
         while (studentFail){
             if(studentFail.score<=tempFail){
                 list.push(studentFail.readData())
             }
             studentFail= studentFail.next;
         }
         return list;
    }

}