import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;


    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstList(data: T) {
        let node = new Node(data);
        node.next = this.head
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;

    }

    insertLastList(data: T) {
        if (!this.head) {
            this.insertFirstList(data)
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }

    }

    getQuantity():number {
        return this.size;

    }

    readList() {
        let listData = [];
        let currentNode = this.head;
        while (currentNode != null) {
            listData.push(currentNode.readNode());
            currentNode = currentNode.next;
        }
        return listData;
    }

}
