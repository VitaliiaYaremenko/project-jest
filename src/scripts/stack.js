export default class MakeStack {
    constructor() {
        this._data = [];
    }

    push(el) {
        return this._data.push(el);
    }

    pop() {
        if(this._data.length) {
            return this._data.pop();
        }

        throw new Error('Error cannot pop() in empty stack');
    }

    isEmpty() {
        return !this._data.length
    }
}
