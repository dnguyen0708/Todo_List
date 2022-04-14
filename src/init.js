const initialization = () => {
    localStorage.clear();
    const projects = [];
    const serializeProjects = JSON.stringify(projects);
    localStorage.setItem("projects", serializeProjects);
}

export default initialization;