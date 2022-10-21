import Controller from "./control.js";

const startApp = new Controller('taskList');
window.addEventListener('load', () => {
    startApp.showTasks();
})

