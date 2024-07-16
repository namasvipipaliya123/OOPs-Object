class Task {
    constructor(description) {
      this.description = description;
      this.completed = false;
    }
  
    toggleCompleted() {
      this.completed = !this.completed;
    }
  }
  
  class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description) {
      const task = new Task(description);
      this.tasks.push(task);
    }
  
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  
    toggleTask(index) {
      this.tasks[index].toggleCompleted();
    }
  
    renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
  
      this.tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.description;
  
        if (task.completed) {
          li.classList.add('complete');
        }
  
        li.addEventListener('click', () => {
          this.toggleTask(index);
          this.renderTasks();
        });
  
        li.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          this.removeTask(index);
          this.renderTasks();
        });
  
        taskList.appendChild(li);
      });
    }
  }
  
  const todoList = new TodoList();
  
  const form = document.getElementById('taskForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();
  
    if (taskDescription !== '') {
      todoList.addTask(taskDescription);
      todoList.renderTasks();
      taskInput.value = '';
    } else {
      alert('Please enter a task description.');
    }
  });
  