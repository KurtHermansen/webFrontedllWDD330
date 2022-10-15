const imgBasePath = "//byui-cit.github.io/cit261/examples/";

class HikesView {
    renderHikeList(element, hikes) {
        element.innerHTML = '';
        hikes.forEach(hike => {
            element.appendChild(this.renderOneHike(hike));
        });
    }
    renderOneHike(hike) {
        let card = document.createElement('li');
        let title = document.createElement('h2');
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        let divDistance = document.createElement('div');
        let disTitle = document.createElement('h3');
        let disPar = document.createElement('p');
        let divDifficulty = document.createElement('div');
        let difTitle = document.createElement('h3');
        let difPar = document.createElement('p');

        card.classList.add('light');
        title.textContent = hike.name;
        card.setAttribute('data-name', hike.name);
        imgDiv.classList.add('image');        
        img.setAttribute('src', imgBasePath + hike.imgSrc)
        img.setAttribute('alt', hike.imgAlt);
        disTitle.textContent = 'Distance';
        disPar.textContent = hike.distance;
        difTitle.textContent = 'Difficulty';
        difPar.textContent = hike.difficulty;

        imgDiv.appendChild(img);
        divDistance.appendChild(disTitle);
        divDistance.appendChild(disPar);
        divDifficulty.appendChild(difTitle);
        divDifficulty.appendChild(difPar);
        card.appendChild(title);
        card.appendChild(imgDiv);
        card.appendChild(divDistance);
        card.appendChild(divDifficulty);
        
        return card;
    }

    renderHikeDetail(element, hike) {
        let backButton = document.createElement('div');
        let card = document.createElement('li');
        let img = document.createElement('img');
        let title = document.createElement('h2');
        let divDistance = document.createElement('div');
        let disTitle = document.createElement('h3');
        let disPar = document.createElement('p');
        let divDifficulty = document.createElement('div');
        let difTitle = document.createElement('h3');
        let difPar = document.createElement('p');
        let divDirection = document.createElement('div');
        let dirTitle = document.createElement('h3');
        let dirPar = document.createElement('p');

        backButton.classList.add('button');
        backButton.innerHTML = "&lt;- All Hikes"
        img.setAttribute('src', imgBasePath + hike.imgSrc)
        img.setAttribute('alt', hike.imgAlt);
        title.textContent = hike.name;       
        disTitle.textContent = 'Distance';
        disPar.textContent = hike.distance;
        difTitle.textContent = 'Difficulty';
        difPar.textContent = hike.difficulty;
        dirTitle.textContent = 'How to get there';
        dirPar.textContent = hike.directions;

        divDistance.appendChild(disTitle);
        divDistance.appendChild(disPar);
        divDifficulty.appendChild(difTitle);
        divDifficulty.appendChild(difPar);
        divDirection.appendChild(dirTitle);
        divDirection.appendChild(dirPar);
        card.appendChild(img);
        card.appendChild(title);        
        card.appendChild(divDistance);
        card.appendChild(divDifficulty);
        card.appendChild(divDirection);

        element.innerHTML = '';
        card.insertBefore(backButton, card.childNodes[0]);
        element.appendChild(card);
        
        return backButton;

    }


}

export default HikesView;