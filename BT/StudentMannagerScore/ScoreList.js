"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreList = void 0;
var student_1 = require("./student");
var ScoreList = /** @class */ (function () {
    function ScoreList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ScoreList.prototype.ShowList = function () {
        var showlist = [];
        var tempStudent = this.head;
        while (tempStudent != null) {
            showlist.push(tempStudent.readData());
            tempStudent = tempStudent.next;
        }
        return showlist;
    };
    ScoreList.prototype.findByName = function (name) {
        var list = [];
        if (this.size) {
            var currentStudent = this.head;
            while (currentStudent != null) {
                if (currentStudent.name == name) {
                    list.push(currentStudent.readData());
                }
                currentStudent = currentStudent.next;
            }
            return list;
        }
    };
    ScoreList.prototype.insertFirst = function (name, score) {
        var student = new student_1.Student(name, score);
        student.next = this.head;
        this.head = student;
        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    };
    ScoreList.prototype.insertLast = function (name, score) {
        var student = new student_1.Student(name, score);
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            this.tail.next = student;
            this.tail = student;
            this.size++;
        }
    };
    ScoreList.prototype.listStudentMaxScore = function () {
        var list = [];
        var template = this.head;
        var max = template.score;
        while (template) {
            if (max < template.score) {
                max = template.score;
            }
            template = template.next;
        }
        template = this.head;
        while (template) {
            if (template.score == max) {
                list.push(template.readData());
            }
            template = template.next;
        }
        return list;
    };
    ScoreList.prototype.totalStudentsFail = function () {
        var list = [];
        var tempFail = 5;
        var studentFail = this.head;
        while (studentFail) {
            if (studentFail.score <= tempFail) {
                list.push(studentFail.readData());
            }
            studentFail = studentFail.next;
        }
        return list;
    };
    return ScoreList;
}());
exports.ScoreList = ScoreList;
