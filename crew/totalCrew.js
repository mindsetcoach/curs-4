
window.crew.totalCrew = {

    buildTable: function(allItems, popupClass) {

        let theTBody = document.querySelector('.' + popupClass + ' tbody');

        for (let i = 0; i < allItems.length; i++) {
            let trItem = document.createElement('tr');

            let indexItem = document.createElement('th');
            indexItem.setAttribute('scope', 'row');
            indexItem.innerHTML = i + 1;

            let nameItem = document.createElement('td');
            nameItem.innerHTML = allItems[i].name;

            let agencyItem = document.createElement('td');
            agencyItem.innerHTML = allItems[i].agency;

            let statusItem = document.createElement('td');
            statusItem.innerHTML = allItems[i].status;

            trItem.appendChild(indexItem);
            trItem.appendChild(nameItem);
            trItem.appendChild(agencyItem);
            trItem.appendChild(statusItem);

            theTBody.appendChild(trItem);
        }
    },

    onTileClicked: function(popupClass) {

        let allItems = window.crew.data.allItems;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        window.crew.totalCrew.buildTable(allItems, popupClass)
    }
}