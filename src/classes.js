class Task {
    constructor(title = Task.getDefaultTitle()){
        ++Task.count; //static
        this.title = title;
        this._done = false;
    }

    get done() {
        return this._done === true ? 'Finished' : 'Unfinished';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = true;
        } else {
            console.error("Should be 'true' or 'false'!");
        }
    } 

    complete() {
        this.done = true;
        console.log(`task "${this.title}" finished`);
    }

    static getDefaultTitle() {
        return 'Task';
    }
}

Task.count = 0; //static property

let task = new Task('clean desk');
let task2 = new Task('buy bread');
// console.log(typeof task);
// console.log(task instanceof Task);
console.log(Task.count);

console.log(task.title);
console.log(task2.title);

task2.complete();
//task2.getDefaultTitle();
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
