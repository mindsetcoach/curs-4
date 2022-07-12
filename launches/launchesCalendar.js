
window.launches.launchesCalendar = {

    buildCalendar: function() {

        let launchesData = launches.data.allItems;

    },

    renderTile: function() {
        // this tile is rendered by the HTML directly
    },

    onTileClicked: function() {

        let popupClass = launches.data.currentlyOpenedPopupClass;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        launches.launchesCalendar.buildCalendar();
    }

}