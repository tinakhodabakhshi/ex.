document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
  
        taskItem.addEventListener('click', function() {
          taskItem.classList.toggle('completed');
        });
  
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Elimina';
  
        deleteButton.addEventListener('click', function(event) {
          event.stopPropagation();
          taskItem.remove();
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  });
  