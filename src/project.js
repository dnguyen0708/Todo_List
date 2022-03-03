
class Project {
    constructor(name) {
        this.name = name;
        this.todo = [];
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
            todoContent.style.backgroundColor = "pink";
            todoWrapper.append(projectTitle, todoContent);
            mainContent.appendChild(todoWrapper);
        }

    }

    addTodo(todo) {
        this.todo.push(todo);
    }

    removeTodo(index) {
        this.todo.splice(index, 1);
    }
}

export default Project;