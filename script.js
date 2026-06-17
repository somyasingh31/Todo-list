const addtask = document.querySelector("#add-task");
const newtask = document.querySelector("#new-task");
const tasklist = document.querySelector("#task-list");
const taskCounter = document.querySelector("#task-counter");

function updateTaskCounter() {
  taskCounter.textContent = `Tasks: ${tasklist.children.length}`;
}

function createTask(taskValue) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const tasktext = document.createElement("span");
  tasktext.textContent = taskValue;
  tasktext.classList.add("task-text");

  checkbox.addEventListener("change", () => {
    tasktext.classList.toggle("completed");
  });

  const deletebtn = document.createElement("span");
  deletebtn.textContent = "🗑";
  deletebtn.classList.add("delete-btn");

  deletebtn.addEventListener("click", () => {
    li.remove();
    updateTaskCounter();
  });

  li.appendChild(checkbox);
  li.appendChild(tasktext);
  li.appendChild(deletebtn);

  tasklist.appendChild(li);

  updateTaskCounter();
}

function addTask() {
  const taskValue = newtask.value.trim();

  if (taskValue === "") {
    alert("Please enter a valid input");
    return;
  }

  createTask(taskValue);

  newtask.value = "";
}

addtask.addEventListener("click", addTask);

newtask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

updateTaskCounter();
