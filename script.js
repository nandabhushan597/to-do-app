const addTaskButton = document.getElementById('task')

addTaskButton.addEventListener('click', getTask)

function getTask() {
    console.log("in get task")
    var taskField = document.getElementById('task').value;
    var list = document.getElementById('list');
    list.innerHTML = taskField;
    console.log(taskField);
}