
window.launches.totalLaunches = {

    buildTable: function(allItems, popupClass) {

        let theTBody = document.querySelector('.' + popupClass + ' tbody');

        for (let i = 0; i < allItems.length; i++) {
            let trItem = document.createElement('tr');

            let indexItem = document.createElement('th');
            indexItem.setAttribute('scope', 'row');
            indexItem.innerHTML = i + 1;

            let dateItem = document.createElement('td');
            dateItem.innerHTML = moment(allItems[i].date_unix * 1000).format('LL');;

            let nameItem = document.createElement('td');
            nameItem.innerHTML = allItems[i].name;

            let flightNumberItem = document.createElement('td');
            flightNumberItem.innerHTML = allItems[i].flight_number;

            let crewNoItem = document.createElement('td');
            crewNoItem.innerHTML = allItems[i].crew.length;

            let noOfCoresItem = document.createElement('td');
            noOfCoresItem.innerHTML = allItems[i].cores.length;

            trItem.appendChild(indexItem);
            trItem.appendChild(dateItem);
            trItem.appendChild(nameItem);
            trItem.appendChild(flightNumberItem);
            trItem.appendChild(crewNoItem);
            trItem.appendChild(noOfCoresItem);

            theTBody.appendChild(trItem);
        }
    },

    renderTile: function() {
        let firstTileCount = document.querySelector('.pageContent > .contentTile div.si-cardContent');
        firstTileCount.innerHTML = 'See all ' + launches.data.allItems.length + ' SpaceX launches...';
    },

    onTileClicked: function() {

        let allItems = launches.data.allItems;
        let popupClass = launches.data.currentlyOpenedPopupClass;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        launches.totalLaunches.buildTable(allItems, popupClass);
    }
}