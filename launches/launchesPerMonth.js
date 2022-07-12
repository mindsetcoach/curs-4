
window.launches.launchesPerMonth = {

    buildChart: function() {

        let launchesData = launches.data.allItems;

        let launchesPerMonthValues =
            launches.launchesPerMonth.getLaunchesPerMonthValues(launchesData);

        let monthLabels = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
    
        let data = {
            labels: monthLabels,
            datasets: [{
                label: 'No. of launches',
                backgroundColor: 'rgba(13, 110, 253, 0.5)',
                borderColor: 'rgba(13, 110, 253, 0.5)',
                data: launchesPerMonthValues,
            }]
        };
    
        let config = {
            type: 'line',
            data: data,
            options: {}
        };

        let myChart = new Chart(
            document.querySelector('.si-launchesPerMonthChart'),
            config
        );
    },

    renderTile: function() {
        // this tile is rendered by the HTML directly
    },

    onTileClicked: function() {

        let allItems = launches.data.allItems;
        let popupClass = launches.data.currentlyOpenedPopupClass;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        launches.launchesPerMonth.buildChart();
    },

    getLaunchesPerMonthValues: function(launchesData) {

        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < launchesData.length; i++) {
            let dateString = launchesData[i].date_utc;
            let monthString = dateString.split('-')[1];
            console.log(monthString);

            let monthIndex = parseInt(monthString) - 1;
            result[monthIndex] = result[monthIndex] + 1;
        }

        return result;
    }
}