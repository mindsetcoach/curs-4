
window.launches.launchesCalendar = {

    buildCalendar: function() {

        // set the initial source of truth for the selected month
        launches.data.selectedCalendarMonth = {
            year: moment().year(),
            monthOfYear: moment().month() + 1
        };

        launches.launchesCalendar.renderSelectedMonth(launches.data.selectedCalendarMonth);

        let prevButton = document.querySelector('.modal.si-launchesCalendar .si-calendarPrev');
        let nextButton = document.querySelector('.modal.si-launchesCalendar .si-calendarNext');
        prevButton.addEventListener('click', launches.launchesCalendar.onPrevClicked);
        nextButton.addEventListener('click', launches.launchesCalendar.onNextClicked);
    },

    renderSelectedMonth: function(selectedMonth) {
        // we first get only the launches for this month
        let selectedMonthLaunches = launches.launchesCalendar.getLaunchesForMonthAndYear(
            selectedMonth.year,
            selectedMonth.monthOfYear,
            launches.data.allItems
        );
        console.log(selectedMonthLaunches);
    },

    onPrevClicked: function() {
        let year = launches.data.selectedCalendarMonth.year;
        let monthOfYear = launches.data.selectedCalendarMonth.monthOfYear;

        if (monthOfYear === 1) {
            year = year - 1;
            monthOfYear = 12;
        } else {
            monthOfYear--;
        }

        launches.data.selectedCalendarMonth = {
            year: year,
            monthOfYear: monthOfYear
        };
        launches.launchesCalendar.renderSelectedMonth(launches.data.selectedCalendarMonth);
    },

    onNextClicked: function() {
        let year = launches.data.selectedCalendarMonth.year;
        let monthOfYear = launches.data.selectedCalendarMonth.monthOfYear;

        if (monthOfYear === 12) {
            year = year + 1;
            monthOfYear = 1;
        } else {
            monthOfYear++;
        }

        launches.data.selectedCalendarMonth = {
            year: year,
            monthOfYear: monthOfYear
        };
        launches.launchesCalendar.renderSelectedMonth(launches.data.selectedCalendarMonth);
    },

    getLaunchesForMonthAndYear: function(
        year, // as number
        month, // as number
        allLaunches
    ) {
        let resultLaunches = [];
        for (let i = 0; i < allLaunches.length; i++) {
            let item = allLaunches[i];
            let itemDate = item.date_utc;
            let itemYear = itemDate.split('-')[0];
            let itemMonth = itemDate.split('-')[1];
            if (parseInt(itemYear) === year && parseInt(itemMonth) === month) {
                resultLaunches.push(item);
            }
        }
        return resultLaunches;
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