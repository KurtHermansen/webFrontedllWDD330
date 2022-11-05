import StarWarsModel from "./swModel.js";
import DataView from "./swView.js";

export default class StartWarsController {
    constructor(id) {
        this.displayElement = document.getElementById(id);
        this.model = new StarWarsModel();
        this.view = new DataView(id);
    }

    showData(swCategory){
        const url = this.model.getCategory(swCategory)
        fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                return response.json();
            }
        })
        .then(function(jsonObject){
           const results = jsonObject.results
           this.view.renderData(this.displayElement, results)

        })       

    }

}






// const apiURL2 = 'https://swapi.dev/api/starships/';

// fetch(apiURL2)
//   .then(function (response) {
//     return response.json();
//     // return response.blob();
//   })
//   .then(function (jsonObject) {
//     console.log(jsonObject);
//    if (jsonObject.next) {
//     fetch(jsonObject.next)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(nextJsonObject) {
//         console.log(nextJsonObject)
//     })
//    }
//   })
