import './style.css';
import ProjectManager from './project_manager';
import Project from './project';
import Todo from './todo';

// projectComponent();

const toggleFormBtn = document.querySelector('.add-project-btn');
const addProjectBtn = document.querySelector('.btn.add');
const closeProjectBtn = document.querySelector('.btn.close');
const inputForm = document.querySelector('#project_name');
const projects = document.querySelector('.projects');
const form = document.querySelector('.project-input-field');
const mainContent = document.querySelector('.main-content');
const projectsList = document.querySelector('.projects');

//test data
const projectManager = new ProjectManager(projectsList);
// const p1 = new Project("p1");
// const td1 = new Todo("td1", "td1", "2022-12-31", "medium");
// p1.addTodo(td1);

// projectManager.addProject(p1);
// projectManager.populate();


const toggleForm = function () {
    form.classList.toggle('active');
    toggleFormBtn.style.display = 'none';
}
const closeForm = function () {
    form.classList.toggle('active');
    toggleFormBtn.style.display = 'block';
}
const addProject = function () {
    if (inputForm.value) {

        const newProject = new Project(inputForm.value);
        projectManager.addProject(newProject);
        newProject.display();
        projectManager.populate();
        inputForm.value = '';
        insertProjectEventListener();
        closeForm();
    } else {
        alert("project name can't be blank")
    }
}
const displayNextAvailableProject = function (e) {
    if (e.target.parentNode.nextSibling) {
        const project = projectManager.projects[e.target.parentNode.nextSibling.dataset.index];
        project.display();
    }
    else if (e.target.parentNode.previousSibling) {
        const project = projectManager.projects[e.target.parentNode.previousSibling.dataset.index];
        project.display();
    }
    else {
        const todoWrapper = document.querySelector('.todo-wrapper');
        todoWrapper.parentNode.removeChild(todoWrapper);
    }
}
const removeProject = function (e) {
    e.stopPropagation();
    // displayNextAvailableProject(e);
    e.target.parentNode.remove();
    projectManager.removeProject(this.parentNode.dataset.index);
    if (!projectManager.projects.length) {
        const todoWrapper = document.querySelector('.todo-wrapper');
        todoWrapper.parentNode.removeChild(todoWrapper);
        return;
    }
    projectManager.populate();
    insertProjectEventListener();

}
const displayProject = function (e) {
    const project = projectManager.projects[this.dataset.index];
    project.display();
}
const insertProjectEventListener = () => {
    const allprojects = document.querySelectorAll('.project');
    allprojects.forEach(p => {
        p.addEventListener('click', displayProject)
    })
    const removeIcons = document.querySelectorAll('.fa-solid.fa-xmark');
    removeIcons.forEach(icon => {
        icon.addEventListener('click', removeProject);
    })
}


toggleFormBtn.addEventListener("click", toggleForm);
addProjectBtn.addEventListener("click", addProject);
closeProjectBtn.addEventListener("click", closeForm);

