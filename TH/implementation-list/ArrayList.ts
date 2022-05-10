import {IArrayList} from "./IArrayList";

export class ArrayList<T> implements IArrayList<T> {
    container: Array<T>;

    constructor() {
        this.container = []
    }

    add(data: T) { // them phan tu vao cuoi danh sach
this.container.push(data);
    }

    get(index: number): T {
     return this.container[index];
    }

    remove(): void {
 this.container.pop();
    }

    size(): number {
        return this.container.length;
    }

}