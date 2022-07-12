
window.crew.crewGallery = {

    buildGallery: function() {

        let allItems = crew.data.allItems;
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

        crew.crewGallery.buildGallery();
    }
}