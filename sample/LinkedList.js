"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null; // trong node chua nut chuyen sang lien ket voi pha  tu sau
        this.data = data;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.search = function (data) {
        if (this.size) {
            var currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data == data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    };
    LinkedList.prototype.deleteFirstNode = function () {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
            }
            this.size--;
        }
    };
    LinkedList.prototype.deleteLastNode = function () {
        if (this.head) {
            var currentNode = this.head;
            if (!currentNode.next) {
                this.head = null;
            }
            else {
                var previousNode = null;
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                this.tail = previousNode;
                this.size--;
            }
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
