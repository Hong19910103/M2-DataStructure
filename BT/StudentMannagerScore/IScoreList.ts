export interface IScoreList {
    insertFirst(name, score): void;

    insertLast(name, score): void;

    ShowList();

    totalStudentsFail(): any;

    listStudentMaxScore(): any;

    findByName(name): any;
}