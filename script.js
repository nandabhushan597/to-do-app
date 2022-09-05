getDate()

const addTaskButton = document.getElementById('addButton')

addTaskButton.addEventListener('click', getTask)

const clearTaskButton = document.getElementById('clearButton')

clearTaskButton.addEventListener('click', clearTask)

var counter = 0;

function getTask() {
    counter = ++counter; 
    const attribute = 'para-' + counter;
    const list = document.getElementById('list');

    var taskField = document.getElementById('task').value;
    const para = document.createElement("p");
    const removeButton = document.createElement("button");

    para.setAttribute('id', attribute);
    removeButton.setAttribute('id', attribute);
    removeButton.setAttribute('class', 'removeButton')

    // editButton.innerHTML = "<img src='edit-icon.png'/>";
    removeButton.innerText = 'Delete';
    removeButton.onclick = function(){
        const listItem = document.getElementById(attribute);
        list.removeChild(listItem);
    }
    para.innerText = taskField;

    list.appendChild(para).appendChild(removeButton);
}

function clearTask() {
    console.log("in clear");
    var taskField = document.getElementById('task');
    taskField.value = null;
}

function getDate() {
    let today = new Date().toLocaleDateString();
    $(date).text(today)
}