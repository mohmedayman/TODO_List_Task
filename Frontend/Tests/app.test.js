beforeAll(() => {
    document.body.innerHTML = `
      <input id="taskInput" />
      <button id="addTaskButton">Add Task</button>
      <ul id="taskList"></ul>
    `;
  });
test('should add a new task', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
  
    taskInput.value = 'New Task';
    addTaskButton.click();
  
    setTimeout(() => {
      const taskList = document.getElementById('taskList');
      expect(taskList.innerHTML).toContain('New Task');
    }, 1000);
  });
  