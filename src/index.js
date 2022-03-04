import './style.css';
import ProjectController from './projectController';
import Project from './project';
import Todo from './todo';

// projectComponent();
const toggleProjectFormBtn = document.querySelector('.add-project-btn');
const addProjectBtn = document.querySelector('.project-input-field > .btn.add');
const closeProjectBtn = document.querySelector('.project-input-field > .btn.close');
const closeTodoBtn = document.querySelector('.btn-container > .btn.close');
const projectsList = document.querySelector('.projects');
const toggleTodoFormBtn = document.querySelector('.add-todo-btn');
const todoForm = document.querySelector('.todo_form');

const projectController = new ProjectController(projectsList);
const p1 = new Project('test project');
const todo1 = new Todo('todo1', 'todo1', '3/3/2022', 'red');
const todo2 = new Todo('todo1', 'todo1', '3/3/2022', 'green');
const todo3 = new Todo('todo1', 'todo1', '3/3/2022', 'yellow');
const todo4 = new Todo('todo1', 'todo1', '3/3/2022', 'red');
p1.addTodo(todo1);
p1.addTodo(todo2);
p1.addTodo(todo3);
p1.addTodo(todo4);
projectController.addProject(p1);
projectController.populate();

const toggleProjectForm = function () {
    const form = document.querySelector('.project-input-field');
    form.classList.toggle('active');
    toggleProjectFormBtn.style.display = 'none';
}
const toggleTodoForm = function () {
    const form = document.querySelector('.todo_form');
    form.classList.toggle('active');
    toggleTodoFormBtn.style.display = 'none';
}
const closeForm = function () {
    const form = document.querySelector('.project-input-field');
    form.classList.toggle('active');
    toggleProjectFormBtn.style.display = 'block';
}
const addProject = function () {
    const inputForm = document.querySelector('#project_name');
    if (inputForm.value) {
        const newProject = new Project(inputForm.value);
        projectController.addProject(newProject);
        newProject.display();
        projectController.populate();
        inputForm.value = '';
        insertProjectEventListener();
        closeForm();
    } else {
        alert("project name can't be blank")
    }
}
const closeTodo = function () {
    const form = document.querySelector('.todo_form');
    form.classList.toggle('active');
    toggleTodoFormBtn.style.display = 'block';
    todoForm.reset();
}
const addTodo = function (e) {
    e.preventDefault();
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
    const date = document.querySelector('#date');
    const prioritySelector = document.querySelectorAll("[type='radio']");
    let priority;
    prioritySelector.forEach(p => {
        if (p.checked)
            priority = p.value;
    })
    const newTodo = new Todo(title.value, desc.value, date.value, priority);
    const currentActiveProject = document.querySelector('.project.active');
    const project = projectController.projects[currentActiveProject.dataset.index];
    project.addTodo(newTodo);
    project.display();
    closeTodo();
    insertTodoEventListener();

}
const removeProject = function (e) {
    e.stopPropagation();
    // displayNextAvailableProject(e);
    e.target.parentNode.remove();
    projectController.removeProject(this.parentNode.dataset.index);
    if (!projectController.projects.length) {
        const todoWrapper = document.querySelector('.todo-wrapper');
        todoWrapper.parentNode.removeChild(todoWrapper);
        return;
    }
    projectController.populate();
    insertProjectEventListener();

}
const displayProject = function () {
    const project = projectController.projects[this.dataset.index];
    const activeProject = document.querySelector('.project.active');
    activeProject.classList.remove('active');
    this.classList.add('active');
    project.display();
}
const insertProjectEventListener = () => {
    const allprojects = document.querySelectorAll('.project');
    allprojects.forEach(p => {
        p.addEventListener('click', displayProject);
    })
    const removeIcons = document.querySelectorAll('.project > .fa-solid.fa-xmark');
    removeIcons.forEach(icon => {
        icon.addEventListener('click', removeProject);
    })
    insertTodoEventListener();
}
const removeTodo = function (e) {
    e.stopPropagation();
    const currentActiveProject = document.querySelector('.project.active');
    const project = projectController.projects[currentActiveProject.dataset.index];
    project.removeTodo(e.target.parentNode.dataset.index);
    e.target.parentNode.remove();
    project.display();
    insertTodoEventListener();
}
const selectTodo = function (e) {
    // console.log(this);
}
const insertTodoEventListener = () => {
    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((td) => {
        td.addEventListener('click', selectTodo)
    })
    const removeIcons = document.querySelectorAll('.todo > .fa-solid.fa-xmark');
    removeIcons.forEach(icon => {
        icon.addEventListener('click', removeTodo);
    })
}
toggleProjectFormBtn.addEventListener("click", toggleProjectForm);
addProjectBtn.addEventListener("click", addProject);
closeProjectBtn.addEventListener("click", closeForm);
toggleTodoFormBtn.addEventListener('click', toggleTodoForm)
todoForm.addEventListener("submit", addTodo);
closeTodoBtn.addEventListener("click", closeTodo);

insertProjectEventListener();