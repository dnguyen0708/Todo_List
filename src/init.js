const initialization = () => {
    localStorage.clear();
    const projects = [];
    const serializeProjects = JSON.stringify(projects);
    const todos = [];
    const serializeTodos = JSON.stringify(todos);
    localStorage.setItem("projects", serializeProjects);
    localStorage.setItem("todos", serializeTodos);
}

export default initialization;