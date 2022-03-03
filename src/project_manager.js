class ProjectManager {
    constructor(element) {
        this.element = element;
        this.projects = [];
    }


    static createItem(text, index) {
        const li = document.createElement('li');
        const projectName = document.createElement('h2');
        const bookIcon = document.createElement('i');
        const removeIcon = document.createElement('i');


        projectName.textContent = text;
        bookIcon.className = "fa-solid fa-book-open";
        removeIcon.className = "fa-solid fa-xmark";
        li.className = "project";
        li.dataset.index = index;


        li.append(bookIcon, projectName, removeIcon);

        return li;
    }

    populate() {
        /* remove existing li */
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }

        //populate ul
        this.projects.forEach((p, i) => {
            this.element.append(ProjectManager.createItem(p.name, i));
            p.display();
        })
    }

    addProject(p) {
        this.projects.push(p);
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }
}
export default ProjectManager;