// Step 1: Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCompleteTodo);
filterTodo.addEventListener('change', filterTodos);

// Step 3: Function to add a new task
function addTodo(e) {
    // Prevent the form submission
    e.preventDefault();
    // Create the todoDiv container
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");

    // Create a new todo list item
    const newTodo = document.createElement('li');
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create the complete todo button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`
    todoDiv.appendChild(completeButton);

    // Create the trash todo button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    todoDiv.appendChild(trashButton);

    // Append the todo div to the todo list
    todoList.appendChild(todoDiv);


}
