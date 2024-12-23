const addTaskBtn = document.querySelector('#add-task-btn');
const newTaskInput = document.querySelector('#new-task');
const tasklist = document.querySelector('#task-list');
const clearCompletedBtn = document.querySelector('#clear-completed');
// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();

    // Check if input is not empty
    if (taskText !== '') {
        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add delete button to the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Add event listener to mark task as completed
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');

            // Toggle background color when task is completed 
            if (listItem.classList.contains('completed')) {
                listItem.style.backgroundColor = '#dff0d8';
            } else {
                listItem.style.backgroundColor = 'white';
            }
        });

        // Add event listener to delete the task
        deleteBtn.addEventListener('click', function(event) {
            // Prevent the click from also triggering the “completed” toggle 
            event.stopPropagation();
            // Remove the task
            tasklist.removeChild(listItem);
        });

        // Append delete button to the list item
        listItem.appendChild(deleteBtn);

        // Append the new task to the task list
        tasklist.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = '';
        // Change input field border color to green to indicate success
        newTaskInput.style.borderColor = '#5cb85c';

        // Reset border color after a short delay
        setTimeout(() => {
            newTaskInput.style.borderColor = '#CCC';
        }, 1000);
    } else {
        // Change input field border color to red to indicate error 
        newTaskInput.style.borderColor = '#d9534f';
        
        // Reset border color after a short delay
        setTimeout(() => {
            newTaskInput.style.borderColor = '#CCC';
        }, 1000);

        alert('Please enter a task!');
    }

}

// Add event listener for clearing completed tasks
clearCompletedBtn.addEventListener('click', function() {
    const tasks = tasklist.querySelectorAll('.completed');
    tasks.forEach(task => task.remove());
    saveTasks();
});

addTaskBtn.addEventListener('click', addTask);