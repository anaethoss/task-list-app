// Defining UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Calling loadEventListeners
loadEventListeners();

// Load all event listener
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTask);

  // filter task event
  filter.addEventListener('keyup', filterTask);
}

// Add task function  
function addTask(e) {
  e.preventDefault();

  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');

  // Add class to li
  li.className = 'collection-item';

  // Create TextContent and Append to li
  li.textContent = taskInput.value;

  // Create new link element
  const link = document.createElement('a');

  // Add class to link element
  link.className = 'delete-item secondary-content';

  // Add Icons html to link
  link.innerHTML = '<i class="material-icons">clear</i>';

  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Remove Task function
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

// Clear task function
function clearTask() {
  
  if(confirm('Are you sure?')) {
    // Clear with innerHTML(slow)
    // taskList.innerHTML = '';

    // Clear with while loop (faster)
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

}

// Filter task function
function filterTask(e) {
  let text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(task => {
    const itemText = task.firstChild.textContent.toLowerCase();
    if (itemText.indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}