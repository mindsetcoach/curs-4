
window.crew.crewGallery = {

    buildGallery: function(popupClass) {

        let allItems = crew.data.allItems;

        let itemsParent = document.querySelector('.' + popupClass + ' .modal-body');

        for (let i = 0; i < allItems.length; i++) {
            let divElement = document.createElement('div');
            let imgElement = document.createElement('img');
            let nameElement = document.createElement('div');

            divElement.classList.add('galleryItem');
            imgElement.setAttribute('src', allItems[i].image);
            imgElement.classList.add('galleryPhoto');
            nameElement.innerHTML = allItems[i].name;

            divElement.appendChild(imgElement);
            divElement.appendChild(nameElement);

            itemsParent.appendChild(divElement);
        }
    },

    buildCarousel: function() {

        let allItems = crew.data.allItems;
    },

    renderTile: function() {
        // this tile is rendered directly in the HTML
    },

    onTileClicked: function() {

        let popupClass = crew.data.currentlyOpenedPopupClass;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        crew.crewGallery.buildGallery(popupClass);
    }
}