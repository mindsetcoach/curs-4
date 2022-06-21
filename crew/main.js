window.crew = {
    
    data: {
        allItems: [],
        currentlyOpenedPopupClass: null
    },

    render: function() {
        let firstTile = document.querySelector('.pageContent > .contentTile');
        firstTile.innerHTML =
            firstTile.innerHTML +
            '<br>we get ' +
            crew.data.allItems.length +
            ' crew members'
        ;
    },

    onTileClicked: function(event) {

        let popupClass = event.currentTarget.dataset.popupClass;
        crew.data.currentlyOpenedPopupClass = popupClass;

        window.crew.totalCrew.onTileClicked(popupClass);
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
