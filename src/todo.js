class Todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get info() {
        return [this.title, this.desc, this.dueDate, this.priority];
    }

    updateTodo(title, desc, date, pri) {
        this.title = title;
        this.desc = desc;
        this.dueDate = date;
        this.priority = pri;
    }
}

export default Todo;