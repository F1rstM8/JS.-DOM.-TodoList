let tasks = [];
const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#task-list");

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text + " ";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });
    li.append(deleteBtn);
    list.append(li);
  });
}

const errorMessage = document.querySelector('#error-message');
function addTask() {
    const text = input.value.trim(); 
    if (text === '') {
        input.classList.add('input-error'); 
        errorMessage.textContent = 'Будь ласка, введіть текст справи!';
        errorMessage.style.display = 'block'; 
        return; 
    }
    tasks.push({
        id: Date.now(),
        text: text
    });
    input.value = ''; 
    input.classList.remove('input-error');
    errorMessage.style.display = 'none';
    
    renderTasks();
}
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
input.addEventListener('input', () => {
    input.classList.remove('input-error');
    errorMessage.style.display = 'none';
});