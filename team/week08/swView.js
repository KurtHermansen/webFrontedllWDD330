class DataView {
    renderData(element, jsonObject) { 
        element.innerHTML = '';
        jsonObject.forEach(data => {
            element.appendChild(this.renderOneDAta(data))            
        });
    }

    renderOneData(data) {
        let card = document.createElement('div');
        let title = document.createElement('h3');

        title.textContent = data.name

        card.appendChild(title);

        return card;
    }
}

export default DataView;