
class Project {
    constructor(name) {
        this.name = name;
        this.todo = [];
    }

    static createTodo(td, index) {
        const todoContainer = document.createElement('div');
        const h3 = document.createElement('h3');
        const desc = document.createElement('p');
        const date = document.createElement('p');
        const xmark = document.createElement('i');

        todoContainer.className = "todo";
        xmark.className = "fa-solid fa-xmark";

        h3.textContent = td.title;
        desc.textContent = td.desc;
        date.textContent = td.dueDate;
        todoContainer.style.border = `2px solid ${td.priority}`;
        todoContainer.dataset.index = index;
        todoContainer.append(h3, date, desc, xmark);

        return todoContainer;
    }

    display() {
        const mainContent = document.querySelector(".main-content");
        if (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        if (!mainContent.firstChild) {
            const projectTitle = document.createElement('h2');
            const todoContent = document.createElement('div');
            const todoWrapper = document.createElement('div')

            todoContent.className = "todo-content";
            todoWrapper.className = "todo-wrapper";

            projectTitle.textContent = this.name;
            todoWrapper.append(projectTitle, todoContent);
            mainContent.appendChild(todoWrapper);
            this.populate();
        }
    }

    populate() {
        //reset list
        const todoContent = document.querySelector('.todo-content');
        while (todoContent.firstChild) {
            todoContent.removeChild(todoContent.firstChild);
        }

        this.todo.forEach((td, index) => {
            todoContent.append(Project.createTodo(td, index));
        });
    }

    addTodo(todo) {
        this.todo.push(todo);
    }

    removeTodo(index) {
        this.todo.splice(index, 1);
    }
}

export default Project;