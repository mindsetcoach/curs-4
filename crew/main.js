window.crew = {
    
    data: {
        allItems: [],
        currentlyOpenedPopupClass: null,
        isGalerySorted: false,
        selectedCarouselCrewMemberId: null
    },

    render: function() {
        crew.totalCrew.renderTile();
    },

    onTileClicked: function(event) {

        let popupClass = event.currentTarget.dataset.popupClass;
        crew.data.currentlyOpenedPopupClass = popupClass;

        if (popupClass === 'si-allCrew') {
            crew.totalCrew.onTileClicked();
        }
        if (popupClass === 'si-crewGallery') {
            crew.crewGallery.onTileClicked();
        }
    },

    onClosePopupButtonClicked: function() {
        document
            .querySelector('div.modal.' + crew.data.currentlyOpenedPopupClass)
            .style.display = 'none';
    },

    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function(response) {
                // success
                crew.data.allItems = response.data;
                crew.render();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;

        // for all the tiles found in the page, we add a click event
        let tiles = document.querySelectorAll('.pageContent > .contentTile');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', crew.onTileClicked);
        }

        // for all the close buttons inside the popups, we add a click event
        let closePopupButtons = document.querySelectorAll('.modal button.btn-close');
        for (let i = 0; i < closePopupButtons.length; i++) {
            closePopupButtons[i].addEventListener('click', crew.onClosePopupButtonClicked);
        }
    }
};

crew.init();
