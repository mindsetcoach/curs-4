window.index = {
    
    data: {
        allLaunchpadItems: [],
        companyInfo: null
    },

    renderCompanyInfo: function() {
        let descriptionSection = document.querySelector('.si-description.si-section');
        let addressSection = document.querySelector('.si-address.si-section');

        let statSpanEmployees = document.querySelector('.si-employees.si-infoTableCell > span');
        let statSpanVehicles = document.querySelector('.si-vehicles.si-infoTableCell > span');
        let statSpanLaunchSites = document.querySelector('.si-launchSites.si-infoTableCell > span');
        let statSpanTestSites = document.querySelector('.si-testSites.si-infoTableCell > span');
        let statSpanValuation = document.querySelector('.si-valuation.si-infoTableCell > span');

        let twitterAnchor = document.querySelector('.si-socialMedia.si-section > a');

        descriptionSection.innerHTML += window.index.data.companyInfo.summary;

        statSpanEmployees.innerHTML = window.index.data.companyInfo.employees;
        statSpanVehicles.innerHTML = window.index.data.companyInfo.vehicles;
        statSpanLaunchSites.innerHTML = window.index.data.companyInfo.launch_sites;
        statSpanTestSites.innerHTML = window.index.data.companyInfo.test_sites;
        statSpanValuation.innerHTML = window.index.data.companyInfo.valuation;

        addressSection.innerHTML += window.index.concatenateAddressText(window.index.data.companyInfo.headquarters);

        twitterAnchor.href = window.index.data.companyInfo.links.twitter;

    },

    concatenateAddressText: function(headquarters) {
        let result =
            headquarters.address + ', ' +
            headquarters.city + ', ' +
            headquarters.state
        ;
        return result;
    },

    renderCompanyMap: function() {
        let companyMap = document.querySelector('.pageContent > .si-companyMap');
        companyMap.innerHTML =
            companyMap.innerHTML +
            '<br>we get ' +
            index.data.allLaunchpadItems.length +
            ' launch pads'
        ;
    },

    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/company')
            .then(function(response) {
                // success
                index.data.companyInfo = response.data;
                index.renderCompanyInfo();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;
        axios
            .get('https://api.spacexdata.com/v4/launchpads')
            .then(function(response) {
                // success
                index.data.allLaunchpadItems = response.data;
                index.renderCompanyMap();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;
    }
};

window.index.init();
