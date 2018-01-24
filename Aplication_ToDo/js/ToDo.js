
function ToDo(description) {
    this.id = ToDo.UID++;
    this.description = description;
    this.isCompleted = false;
}

ToDo.UID = 1;