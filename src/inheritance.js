class Task {
    constructor(title = getDefaultTitle) {
        this._title = title;
        this.done = false;
        console.log('Creating a task');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'Task';
    }

    complete() {
        this.done = true;
        console.log(`${this.title} is done`)
    }
}

class Subtask extends Task {
//if there's no constructor, it inherits Parent's constructor
    constructor(title, parent){
        //if defined, super is required
        super(title);
        this.parent = parent;
        console.log('Creating a subtask');
    }

    complete() {
        super.complete();
        console.log('Subtask is done');
    }
}

let task = new Task('Learn JavaScript');
let subtask = new Subtask('Learn ES6', task);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(subtask.getDefaultTitle);
