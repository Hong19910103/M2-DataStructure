export class DoublyLinkedList {
    nodes: any[] = [];

    size(): number {
        return this.nodes.length;
    }

    head() {
        return this.size ? this.nodes[0] : null;
    }

    tail() {
        return this.size() ? this.nodes[this.size() - 1] : null;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = {value, next: nextNode, previous: previousNode};
        if (previousNode) {
            previousNode.next = node;
        }

        if (nextNode) {
            nextNode.previous = node;
        }

        this.nodes.splice(index, 0, node);
    }

    insertFirst(value) {
        this.insertAt(0, value);
    }

    insertLast(value) {
        this.insertAt(this.size(), value);
    }

    getAt(index) {
        return this.nodes[index];
    }

    removeAt(index) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index + 1] || null;

        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.previous = previousNode;

        return this.nodes.splice(index, 1);
    }

    clear() {
        this.nodes = [];
    }

    reverse() {
        this.nodes = this.nodes.reduce((acc, {value}) => {
            const nextNode = acc[0] || null;
            const node = {value, next: nextNode, previous: null};
            if (nextNode) nextNode.previous = node;
            return [node, ...acc];
        }, []);
    }

}

const list = new DoublyLinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);
//
console.log(list)

list.reverse()
