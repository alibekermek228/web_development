const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(taskName) {
    const item = document.createElement('li');
    item.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = taskName;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = '🗑';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            item.classList.add('done');
        } else {
            item.classList.remove('done');
        }
    });

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(item);
    });

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = taskInput.value.trim();
    if (value === '') {
        alert("Sorry you type wrong text!");
    }

    addTask(value);
    taskInput.value = '';
});
