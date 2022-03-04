class ProjectController {
    constructor(element) {
        this.element = element;
        this.projects = [];
    }


    static createItem(text, index, active = false) {
        const li = document.createElement('li');
        const projectName = document.createElement('h2');
        const bookIcon = document.createElement('i');
        const removeIcon = document.createElement('i');


        projectName.textContent = text;
        bookIcon.className = "fa-solid fa-book-open";
        removeIcon.className = "fa-solid fa-xmark";
        li.className = "project";
        if (active) {
            li.classList.add('active');
        }
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
            if (i === this.projects.length - 1) {
                this.element.append(ProjectController.createItem(p.name, i, true));
                p.display();
            } else {
                this.element.append(ProjectController.createItem(p.name, i));
            }

        })
    }

    addProject(p) {
        this.projects.push(p);
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }
}
export default ProjectController;