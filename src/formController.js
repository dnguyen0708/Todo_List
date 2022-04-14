import Form from './form';
const mainContentWrapper = document.querySelector(".main-content-wrapper");
const todoFormInit = Form("todo_form");
mainContentWrapper.appendChild(todoFormInit);
const todoForm = document.querySelector('.todo_form');
const toggleProjectFormBtn = document.querySelector('.add-project-btn');
const toggleTodoFormBtn = document.querySelector('.add-todo-btn');
const closeProjectBtn = document.querySelector('.project-input-field > .btn.close');
const closeTodoBtn = document.querySelector('.todo_form .btn-container > .btn.close');

const closeForm = function () {
    const form = document.querySelector('.project-input-field');
    form.classList.toggle('active');
    toggleProjectFormBtn.style.display = 'block';
}
const closeTodo = function () {
    const form = document.querySelector('.todo_form.active');
    form.classList.toggle('active');
    toggleTodoFormBtn.style.display = 'block';
    todoForm.reset();
}

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

toggleProjectFormBtn.addEventListener("click", toggleProjectForm);
toggleTodoFormBtn.addEventListener('click', toggleTodoForm);
closeProjectBtn.addEventListener("click", closeForm);
closeTodoBtn.addEventListener("click", closeTodo);
export { toggleProjectForm, toggleTodoForm, closeForm, closeTodo };