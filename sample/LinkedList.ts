export class Node<T> { // tạo 1 lớp node đại diện cho 1 phần tử trong linkedlist
    data: T; // trong node có dữ liệu
    next: Node<T> | null = null; // trong node chua nut chuyen sang lien ket voi pha  tu sau

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLastNode(data: T) {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }

    }

    search(data: T) {
        if (this.size){
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data == data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    deleteFirstNode() {
        if (this.head) {
            if (this.head.next){
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.size--;
        }
    }

    deleteLastNode() {
        if (this.head) {
            let currentNode = this.head;
            if (!currentNode.next) {
                this.head = null;
            } else {
                let previousNode = null;
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                this.tail = previousNode;
                this.size--;
            }
        }
    }
}