
let tasks = []; 
const input = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#task-list');


function renderTasks() {
    
    list.innerHTML = '';

   
    tasks.forEach((task) => {
        
        const li = document.createElement('li');
        li.textContent = task.text + " "; 
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter((t) => t.id !== task.id)
            renderTasks();
        });
        li.append(deleteBtn);
        list.append(li);
    });
}
addBtn.addEventListener('click', () => {
    const text = input.value.trim(); 
    if (text !== '') {
        tasks.push({
            id: Date.now(), 
            text: text
        });
        input.value = ''; 
        renderTasks();
    }
});