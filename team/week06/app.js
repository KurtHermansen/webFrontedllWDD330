import Controller from './controller.js';

const startApp = new Controller('hikes');
window.addEventListener('load', () => {
    startApp.showHikes();
})