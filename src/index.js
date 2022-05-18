import './style.css';
import ProjectController from './projectController';
import Project from './project';
import Todo from './todo';
import { closeForm, closeTodo } from './formController';
import Form from './form';
import initialization from './init';

const addProjectBtn = document.querySelector('.project-input-field > .btn.add');
const projectsList = document.querySelector('.projects');
const projectController = new ProjectController(projectsList);
const todoForm = document.querySelector('.todo_form');

if (Object.keys(localStorage).length === 0) {
    initialization();
    console.log(localStorage);
}
// console.log(localStorage);
projectController.populate();

const addProject = function () {
    const inputForm = document.querySelector('#project_name');
    if (inputForm.value) {
        const newProject = new Project(inputForm.value);
        projectController.addProject(newProject);
        Project.display(newProject);
        projectController.populate();
        inputForm.value = '';
        insertProjectEventListener();
        closeForm();
        addTodoBtnToggle();
    } else {
        alert("project name can't be blank")
    }
}
const addTodoBtnToggle = function () {
    const toggleTodoFormBtn = document.querySelector('.add-todo-btn.btn');
    if (!projectController.projects.length) {
        toggleTodoFormBtn.style.display = 'none';
    } else {
        if (projectController.projects) {
            toggleTodoFormBtn.style.display = 'block';
        } else {
            toggleTodoFormBtn.style.display = 'none';
        }
    }
}
addTodoBtnToggle();
const addTodo = function (e) {
    e.preventDefault();
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
    const date = document.querySelector('#date');
    const prioritySelector = document.querySelectorAll(".todo_form [type='radio']");
    let priority;
    prioritySelector.forEach(p => {
        if (p.checked) {
            priority = p.value;
        }

    })
    const newTodo = new Todo(title.value, desc.value, date.value, priority);
    const currentActiveProject = document.querySelector('.project.active');
    const project = projectController.projects[currentActiveProject.dataset.index];
    Project.addTodo(project, newTodo);
    Project.display(project);
    projectController.update();
    // console.log(localStorage);
    closeTodo();
    insertTodoEventListener();
}
const removeProject = function (e) {
    e.stopPropagation();
    e.target.parentNode.remove();
    projectController.removeProject(this.parentNode.dataset.index);
    if (!projectController.projects.length) {
        const todoWrapper = document.querySelector('.todo-wrapper');
        todoWrapper.parentNode.removeChild(todoWrapper);
        addTodoBtnToggle();
        return;
    }
    projectController.update();
    projectController.populate();
    insertProjectEventListener();
}
const displayProject = function () {
    const project = projectController.projects[this.dataset.index];
    const activeProject = document.querySelector('.project.active');
    activeProject.classList.remove('active');
    this.classList.add('active');
    Project.display(project);
    insertTodoEventListener();
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
    // project.removeTodo(e.target.parentNode.parentNode.dataset.index);
    Project.removeTodo(project, e.target.parentNode.parentNode.dataset.index)
    e.target.parentNode.remove();
    projectController.update();
    Project.display(project);
    insertTodoEventListener();
}
const toggleEditAndDel = function (e) {
    const edt = e.target.nextSibling;
    edt.classList.toggle('active');
    const activeTodo = document.querySelector('.todo.active');
    activeTodo.classList.toggle('active');
    const currentTodo = e.target.parentNode;
    currentTodo.classList.toggle('active');
}
const revealAllTodos = function () {
    const allTodo = document.querySelectorAll(".todo");
    allTodo.forEach(td => {
        td.style.display = 'block';
    })
    const allActiveEDT = document.querySelectorAll('.edit-delete-todo.active');
    allActiveEDT.forEach(edt => {
        edt.classList.toggle('active');
    })
}
const displayInfoEditForm = function (index) {
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
    const date = document.querySelector('#date');
    const prioritySelector = document.querySelectorAll("[type='radio']");
    const currentProjectElement = document.querySelector('.project.active');
    const currentProject = projectController.projects[currentProjectElement.dataset.index];
    const currentTodo = currentProject.todo[index];
    title.value = currentTodo.info[0];
    desc.value = currentTodo.info[1];
    date.value = currentTodo.info[2];
    prioritySelector.forEach(ps => {
        if (ps.value === currentTodo.info[3]) {
            ps.checked = true;
        }
    });
}
const updateTodo = function (e) {
    e.preventDefault();
    const activeTodo = document.querySelector('.todo.active');
    const currentProjectElement = document.querySelector('.project.active');
    const currentProject = projectController.projects[currentProjectElement.dataset.index];
    const currentTodo = currentProject.todo[activeTodo.dataset.index];
    const parentNode = activeTodo.parentNode;
    const form = document.querySelector('.edit_form');
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
    const date = document.querySelector('#date');
    const prioritySelector = document.querySelectorAll(".edit_form [type='radio']");
    prioritySelector.forEach(p => {
        if (p.checked) {
            currentTodo.updateTodo(title.value, desc.value, date.value, p.value);
        }
    });
    parentNode.removeChild(form);
    projectController.update();
    Project.display(currentProject);
    insertTodoEventListener();
}
const editTodos = function () {
    const isForm = document.querySelector('.edit_form');
    const activeTodo = document.querySelector('.todo.active');
    revealAllTodos();
    const parentNode = activeTodo.parentNode;
    if (isForm) {
        parentNode.removeChild(isForm);
    }
    const editTodoForm = Form("edit_form");
    parentNode.insertBefore(editTodoForm, activeTodo);
    activeTodo.style.display = "none";

    displayInfoEditForm(activeTodo.dataset.index);

    const addBtn = document.querySelector('.edit_form .btn.add');
    const closeBtn = document.querySelector('.edit_form .btn.close');
    closeBtn.addEventListener('click', function () {
        editTodoForm.reset();
        parentNode.removeChild(editTodoForm)
        revealAllTodos();
    })
    addBtn.addEventListener('click', updateTodo);
}
const insertTodoEventListener = () => {
    const removeIcons = document.querySelectorAll('.todo > .edit-delete-todo .deleteTodo');
    removeIcons.forEach(icon => {
        icon.addEventListener('click', removeTodo);
    })
    const ellipses = document.querySelectorAll('.todo > .fa-solid.fa-ellipsis');
    ellipses.forEach(e => {
        e.addEventListener('click', toggleEditAndDel);
    })
    const editTodo = document.querySelectorAll('.todo > .edit-delete-todo .editTodo');
    editTodo.forEach(td => { td.addEventListener('click', editTodos) });
}


addProjectBtn.addEventListener("click", addProject);
todoForm.addEventListener("submit", addTodo);

insertProjectEventListener();
