"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkdeList_TH_1 = require("./LinkdeList-TH");
var linkedList = new LinkdeList_TH_1.LinkedList();
linkedList.insertFirstList(6);
linkedList.insertFirstList(4);
linkedList.insertFirstList(7);
linkedList.insertLastList(7);
linkedList.insertLastList(9);
console.log(linkedList.getQuantity());
console.log(linkedList.readList());
linkedList.insertLastList(1);
console.log(linkedList.getQuantity());
console.log(linkedList.readList());