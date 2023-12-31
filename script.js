/**
 * This code implements a simple task list application. 
 * 
 * It selects the task input and task list elements from the DOM.
 * 
 * The addTask() function trims the input value, checks that it's not empty, 
 * creates the task item elements, appends them, and clears the input.
 * 
 * The deleteTask() function removes the task item that was clicked.
 * 
 * Event listeners are added for submitting a new task on enter keypress,
 * and deleting tasks when the delete button is clicked.
 */

const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    const button = document.createElement('button');
    button.textContent = 'Delete';

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(button);

    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}

function deleteTask(event) {
  const taskItem = event.target.closest('.task-item');
  taskItem.remove();
}

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

taskList.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    deleteTask(event);
  }
});

