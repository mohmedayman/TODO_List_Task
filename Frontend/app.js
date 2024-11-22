const API_URL = 'http://localhost:5000/tasks';

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Fetch and display tasks
const fetchTasks = async () => {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  taskList.innerHTML = '';
  tasks.forEach((task) => renderTask(task));
};

// Render a task
const renderTask = (task) => {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  
  // If task is completed, add the completed class to apply line-through
  if (task.completed) {
    taskItem.classList.add('completed');
  }

  // Task Name Input 
  const taskName = document.createElement('input');
  taskName.type = 'text';
  taskName.value = task.name;
  taskName.disabled = true;
  taskName.className = 'task-name';

  // Completed Checkbox
  const taskCompleted = document.createElement('input');
  taskCompleted.type = 'checkbox';
  taskCompleted.className = 'task-completed';
  taskCompleted.checked = task.completed;
  taskCompleted.onclick = () => toggleCompleted(task.id, taskCompleted.checked);

  // Edit Button (Pen Icon)
  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.innerHTML = '<i class="fas fa-pen"></i>'; // Pen icon
  editButton.onclick = () => {
    taskName.disabled = !taskName.disabled;
    if (!taskName.disabled) {
      editButton.innerHTML = '<i class="fas fa-save"></i>'; // Change to Save icon
    } else {
      editTask(task.id, taskName.value);
      editButton.innerHTML = '<i class="fas fa-pen"></i>'; // Change back to Pen icon
    }
  };

  // Delete Button (Trash Icon)
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Trash icon
  deleteButton.onclick = () => deleteTask(task.id);

  taskItem.append(taskCompleted, taskName, editButton, deleteButton);
  taskList.appendChild(taskItem);
};

// Add a task
const addTask = async () => {
  const name = taskInput.value.trim();
  if (!name) {
    return alert('Task name cannot be empty');
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, completed: false }), // Default completed to false
  });

  if (response.ok) {
    const task = await response.json();
    renderTask(task);
    taskInput.value = '';
  }
};

// Edit a task
const editTask = async (id, name) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  fetchTasks();
};

// Delete a task
const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchTasks();
};

// Toggle task completion
const toggleCompleted = async (id, completed) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });

  fetchTasks();
};

// Event listeners
addTaskButton.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', fetchTasks);
