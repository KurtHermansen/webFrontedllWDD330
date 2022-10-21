import TodoModel from "./model.js";
import TaskViews from "./view.js";

class Controller {
    constructor(id) {
        this.parentElement = document.getElementById(id);
        this.todoModel = new TodoModel();
        this.taskViews = new TaskViews(id);
    }
    showTasks() {
        const tasks = this.todoModel.getAllTasks();
        this.taskViews.renderTaskList(this.parentElement, tasks);
        this.addMenuListener();
        this.addTaskListener();
    }
    updateComplete(value, title) {
        const task = this.todoModel.getTodoByTitle(title)
        if (task.complete === false || task.complete === "false"){
            value = true;
            this.todoModel.setNameValue(title, value);
            console.log(value)
            console.log(this.todoModel.getTodoByTitle(title))
            this.showTasks();
        } else if (task.complete === true || task.complete === "true") {
            value = false;
            this.todoModel.setNameValue(title, value);
            console.log(value)
            console.log(this.todoModel.getTodoByTitle(title))
            this.showTasks();
        }
        
    }
    deleteTask(target, task) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.todoModel.deleteTodo(task)
            this.showTasks();
        } else {
            this.showTasks();
        }
        
    }
    toggleMenu() {
        document.getElementsByClassName('navOpen')[0].classList.toggle('nav-close');
    }
    showTaskDetail(title, Array) {
        const task = this.todoModel.getTodoByTitle(title)
        // console.log(task)
        // console.log(title)
        // console.log(Array)
    }
    filterMenu() {
        document.getElementsByClassName('filOpen')[0].classList.toggle('fil-close');
    }
    showCompletedTasks() {
        const compTasks = this.todoModel.getAllTasks();
        this.taskViews.renderCompletedTaskList(this.parentElement, compTasks);
        console.log(compTasks)
        this.addTaskListener();

    }
    showNotCompletedTasks() {
        const notCompTasks = this.todoModel.getAllTasks();
        this.taskViews.renderNotCompletedTaskList(this.parentElement, notCompTasks);
        this.addTaskListener();
    }
    addTask() {
        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', e => {
            modal.style.display = 'none';
        })
        modal.style.display = 'block';      

        
    }
    add() {
        const modal = document.getElementById("myModal");
        const form = document.forms.task
        const formTitle = form.elements.title.value
        const formComp = form.elements.complete.value
        const formDescription = form.elements.description.value
        const formCategory = form.elements.category.value
        const formDateTime = form.elements.dateTime.value 

        console.log(form)
        console.log(formTitle)
        console.log(formComp)
        console.log(formDescription)
        console.log(formCategory)
        console.log(formDateTime)

        const task = {
                    title: formTitle,
                    complete: formComp,
                    description: formDescription,
                    category: formCategory,
                    dateTime: formDateTime
                }
        if (formTitle === '') {
            
        } else {
        this.todoModel.addTask(task);
        }
        modal.style.display = 'none';
        this.showTasks()
        form.reset();


    }
    addTaskListener() {
        const addTask = document.querySelector('.addTask');
        const add = document.querySelector('.add');
        const taskArray = Array.from(this.parentElement.children);
        taskArray.forEach(child => {
            // const compArray = Array.from(child.children)
            child.children[0].addEventListener('click', e => {
                this.updateComplete(e.currentTarget.dataset.name, child.dataset.name)
            })
            child.lastChild.addEventListener('click', e => {
                this.deleteTask(e.currentTarget, child.dataset.name)
            } )
            child.addEventListener('click', e => {
                this.showTaskDetail(e.currentTarget.dataset.name, taskArray)
            })
        })

        addTask.addEventListener('click', () => {this.addTask()});

        add.addEventListener('click', () => {this.add()});

    }

    addMenuListener() {
        const menu = document.querySelector('.menu');
        const filter = document.querySelector('.filter');
        const completed = document.querySelector('.completed');
        const notComplete = document.querySelector('.notComplete');
        const reset = document.querySelector('.reset');


        menu.addEventListener('click', this.toggleMenu);
        filter.addEventListener('click', this.filterMenu);
        completed.addEventListener('click', () => {
            this.showCompletedTasks()});
        notComplete.addEventListener('click', () => {this.showNotCompletedTasks()});
        reset.addEventListener('click', () => {this.showTasks()});

    }
   
}


export default Controller;