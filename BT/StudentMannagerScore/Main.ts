import {ScoreList} from "./ScoreList";

let student1 = new ScoreList();
student1.insertFirst("hong",9);
student1.insertFirst("hong2",2);
student1.insertFirst("hong3",4);
student1.insertFirst("hong4",9);

// console.log(student1.totalStudentsFail());
// student1.insertLast("hong19",5);
// console.log(student1.ShowList());
console.log(student1.findByName("hong"))

