import HikeModel from './model.js';
import HikeView from './view.js';
import Comments from './comment.js';

export default class Controller {
    constructor(id) {
        this.parentElement = document.getElementById(id);
        this.hikeModel = new HikeModel()
        this.hikeView = new HikeView(id)
        this.comments = new Comments('hikes', 'comments');
    }

    showHikes() {
        const hikes = this.hikeModel.getAllHikes();
        this.hikeView.renderHikeList(this.parentElement, hikes)
        this.addHikeListener();
        this.comments.showCommentList();
    }

    showOneHike (hikeName, array) {
        console.log(array)
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikeView.renderHikeDetail(this.parentElement, hike).ontouchend = () => {
            this.showHikes();            
        };
        this.comments.showCommentList(hikeName);
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