window.launches = {
    
    data: {
        allItems: [],
        nextLaunch: null,
        currentlyOpenedPopupClass: null
    },

    render: function() {
        launches.totalLaunches.renderTile();
    },

    onTileClicked: function(event) {

        let popupClass = event.currentTarget.dataset.popupClass;
        launches.data.currentlyOpenedPopupClass = popupClass;

        if (popupClass === 'popupFirst') {
            launches.totalLaunches.onTileClicked();
        }
        if (popupClass === 'popupSecond') {
            launches.launchesPerMonth.onTileClicked();
        }
    },

    onClosePopupButtonClicked: function() {
        document
            .querySelector('div.modal.' + launches.data.currentlyOpenedPopupClass)
            .style.display = 'none';
    },

    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(function(response) {
                // success
                launches.data.allItems = response.data;
                launches.render();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;

        // for all the tiles found in the page, we add a click event
        let tiles = document.querySelectorAll('.pageContent > .contentTile');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', launches.onTileClicked);
        }

        // for all the close buttons inside the popups, we add a click event
        let closePopupButtons = document.querySelectorAll('.modal button.btn-close');
        for (let i = 0; i < closePopupButtons.length; i++) {
            closePopupButtons[i].addEventListener('click', launches.onClosePopupButtonClicked);
        }
    }
};

launches.init();
