import {LinkedList} from "./LinkdeList-TH";

let linkedList = new LinkedList<number>();

linkedList.insertFirstList(6);
linkedList.insertFirstList(4);
linkedList.insertFirstList(7);
linkedList.insertLastList(7);
linkedList.insertLastList(9);

console.log(linkedList.getQuantity());
console.log(linkedList.readList());

linkedList.insertLastList(1)
console.log(linkedList.getQuantity());
console.log(linkedList.readList());

