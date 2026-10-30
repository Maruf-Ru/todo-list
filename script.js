const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#taskInput');
const list = document.querySelector('#list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText; 
        span.addEventListener('click', () => {
            span.classList.toggle('done');
        });

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(delBtn);

        list.appendChild(li);
        taskInput.value = '';
    }
    else {
        alert('Please enter a task.');
    }
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});