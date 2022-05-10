"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstList = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastList = function (data) {
        if (!this.head) {
            this.insertFirstList(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getQuantity = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode != null) {
            listData.push(currentNode.readNode());
            currentNode = currentNode.next;
        }
        return listData;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
