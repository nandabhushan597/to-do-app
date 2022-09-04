const addTaskButton = document.getElementById('addButton')

addTaskButton.addEventListener('click', getTask)

const clearTaskButton = document.getElementById('clearButton')

clearTaskButton.addEventListener('click', clearTask)

function getTask() {
    console.log("in get task")
    var taskField = document.getElementById('task').value;
    const para = document.createElement("p");
    para.innerText = taskField;
    document.body.appendChild(para);
    document.getElementById('list').appendChild(para);
    // list.setAttribute(id)
    // list.innerHTML = taskField;
    // console.log(taskField);
    // create new element 
    // set id 
    // set innerHtml 
}

function clearTask() {
    console.log("in clear");
    var taskField = document.getElementById('task');
    taskField.value = null;
}