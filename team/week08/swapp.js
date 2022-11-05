import StartWarsController from "./swController.js";

const startApp = new StartWarsController('swAPI');
const swCategory = document.getElementById('swCategory');
const swChild = Array.from(swCategory.children);

console.log(swCategory)
console.log(swChild)

swChild.forEach(element => {
    element.addEventListener('click', e => {
        startApp.showData(e.currentTarget.dataset.name)
    })
});   
