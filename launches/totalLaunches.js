
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

    onTileClicked: function(popupClass) {

        let allItems = window.launches.data.allItems;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        window.launches.totalLaunches.buildTable(allItems, popupClass);
    }
}