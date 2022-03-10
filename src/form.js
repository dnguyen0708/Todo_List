const Form = (className) => {
    const form = document.createElement('form');
    const titleField = document.createElement('div');
    const descField = document.createElement('div');
    const dateField = document.createElement('div');
    const priorityField = document.createElement('div');
    const btnContainer = document.createElement('div');
    const titleLabel = document.createElement('label');
    const descLabel = document.createElement('label');
    const dateLabel = document.createElement('label');
    const pTitle = document.createElement('p');
    const highLabel = document.createElement('label');
    const medLabel = document.createElement('label');
    const lowLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descInput = document.createElement('input');
    const dateInput = document.createElement('input');
    const highInput = document.createElement('input');
    const medInput = document.createElement('input');
    const lowInput = document.createElement('input');
    const addBtn = document.createElement('button');
    const closeBtn = document.createElement('button');

    form.className = className;
    titleField.className = "form-control";
    descField.className = "form-control";
    dateField.className = "due-date";
    priorityField.className = "priority-selection";
    btnContainer.className = "btn-container";
    pTitle.className = "priority-title";

    titleLabel.htmlFor = "title";
    descLabel.htmlFor = "desc";
    dateLabel.htmlFor = "date";
    highLabel.htmlFor = "high";
    medLabel.htmlFor = "medium";
    lowLabel.htmlFor = "low";

    pTitle.textContent = "Priority";
    titleLabel.textContent = "Title";
    descLabel.textContent = "Description";
    dateLabel.textContent = "Due Date";
    highLabel.textContent = "High";
    medLabel.textContent = "Medium";
    lowLabel.textContent = "Low";

    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.id = "title";
    titleInput.required = true;

    descInput.type = "text";
    descInput.name = "desc";
    descInput.id = "desc";
    descInput.required = true;
    descInput.maxLength = "100";

    dateInput.type = "date";
    dateInput.name = "date";
    dateInput.id = "date";
    dateInput.required = true;
    let today = new Date().toISOString().slice(0, 10);
    dateInput.value = today;

    highInput.type = 'radio';
    highInput.name = "priority";
    highInput.id = "high";
    highInput.value = "red";

    medInput.type = 'radio';
    medInput.name = "priority";
    medInput.id = "medium";
    medInput.value = "yellow";
    // medInput.checked = true;

    lowInput.type = 'radio';
    lowInput.name = "priority";
    lowInput.id = "low";
    lowInput.value = "green";

    addBtn.className = "btn add";
    addBtn.type = "submit";
    addBtn.textContent = "ADD";

    closeBtn.className = "btn close";
    closeBtn.type = "button";
    closeBtn.textContent = "CLOSE";

    titleField.append(titleLabel, titleInput);
    descField.append(descLabel, descInput);
    dateField.append(dateLabel, dateInput);
    priorityField.append(pTitle, highInput, highLabel, medInput, medLabel, lowInput, lowLabel);
    btnContainer.append(addBtn, closeBtn);
    form.append(titleField, descField, dateField, priorityField, btnContainer);

    return form;
}

export default Form;