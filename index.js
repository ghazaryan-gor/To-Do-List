const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addtaskFn);

function addtaskFn() {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  taskInput.value = "";
  taskItem.appendChild(taskTextSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete-btn");
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);

  taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  console.log(taskList);
}
