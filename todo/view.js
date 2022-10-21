
class TaskViews {

    renderTaskList(elementID, tasks) {
        elementID.innerHTML = '';
        tasks.forEach(task => {
            elementID.appendChild(this.renderOneTask(task));
        });
    }
    renderCompletedTaskList(elementID, tasks) {
        elementID.innerHTML = '';
        tasks.forEach(task => {
            if (task.complete === true || task.complete === 'true') {
                elementID.appendChild(this.renderOneTask(task));
            }
        });
    }
    renderNotCompletedTaskList(elementID, tasks) {
        elementID.innerHTML = '';
        tasks.forEach(task => {
            if(task.complete === false || task.complete ==='false'){
                elementID.appendChild(this.renderOneTask(task));
            }
            
        });
    }
    renderOneTask(task) {
        let taskCard = document.createElement('div');
        let title = document.createElement('h3');
        let complete = document.createElement('div');
        let icon = document.createElement('i');
        let dec = document.createElement('p');
        let del = document.createElement('div');

        taskCard.classList.add('task-card');
        taskCard.setAttribute('data-name', task.title);
        complete.setAttribute('data-name', task.complete)
        if (task.complete === true || task.complete === "true") {
            complete.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else {
            complete.innerHTML = '';
        }
        title.textContent = task.title
        complete.classList.add('complete');
        if (task.category === 'Physical') {
            icon.classList.add('fa-solid', 'fa-dumbbell');
        } else if (task.category === 'Work') {
            icon.classList.add('fa-solid', 'fa-money-bill-1');
        } else if (task.category === 'Personal') {
            icon.classList.add('fa-solid', 'fa-person');
        } else if (task.category === 'Church') {
            icon.classList.add('fa-solid', 'fa-place-of-worship');
        } else if (task.category === 'School') {
            icon.classList.add('fa-solid', 'fa-graduation-cap');
        } else {
            icon.classList.add('error');
        }
        dec.textContent = task.description;
        del.classList.add('deleteTask');
        del.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';

        taskCard.appendChild(complete);
        taskCard.appendChild(title);
        taskCard.appendChild(icon);
        taskCard.appendChild(dec);
        taskCard.appendChild(del);

        return taskCard;
    }
    renderNewTask() {
        
    }



}

export default TaskViews;