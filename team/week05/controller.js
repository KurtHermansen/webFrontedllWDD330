import HikeModel from './model.js';
import HikeView from './view.js';

export default class Controller {
    constructor(id) {
        this.parentElement = document.getElementById(id);
        this.hikeModel = new HikeModel()
        this.hikeView = new HikeView(id)
    }

    showHikes() {
        const hikes = this.hikeModel.getAllHikes();
        this.hikeView.renderHikeList(this.parentElement, hikes)
        this.addHikeListener();
    }

    showOneHike (hikeName, array) {
        console.log(array)
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikeView.renderHikeDetail(this.parentElement, hike).ontouchend = () => {
            this.showHikes();            
        };
    }
    addHikeListener() {
        const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener("touchend", e => {
        this.showOneHike(e.currentTarget.dataset.name, childrenArray);
            });
        });
    }
}