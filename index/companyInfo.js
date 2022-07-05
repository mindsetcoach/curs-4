window.index.companyInfo = {

    render: function() {

        let data = index.data.companyInfo;

        let descriptionSection = document.querySelector('.si-description.si-section');
        let addressSection = document.querySelector('.si-address.si-section');

        let statSpanEmployees = document.querySelector('.si-employees.si-infoTableCell > span');
        let statSpanVehicles = document.querySelector('.si-vehicles.si-infoTableCell > span');
        let statSpanLaunchSites = document.querySelector('.si-launchSites.si-infoTableCell > span');
        let statSpanTestSites = document.querySelector('.si-testSites.si-infoTableCell > span');
        let statSpanValuation = document.querySelector('.si-valuation.si-infoTableCell > span');

        let twitterAnchor = document.querySelector('.si-socialMedia.si-section > a');

        descriptionSection.innerHTML += data.summary;

        statSpanEmployees.innerHTML = utils.getNumberAsStringWithComma(data.employees);
        statSpanVehicles.innerHTML = data.vehicles;
        statSpanLaunchSites.innerHTML = data.launch_sites;
        statSpanTestSites.innerHTML = data.test_sites;
        statSpanValuation.innerHTML = utils.getNumberAsStringWithComma(data.valuation);

        addressSection.innerHTML += index.companyInfo.concatenateAddressText(data.headquarters);

        twitterAnchor.href = data.links.twitter;

    },

    concatenateAddressText: function(headquarters) {
        let result =
            headquarters.address + ', ' +
            headquarters.city + ', ' +
            headquarters.state
        ;
        return result;
    }

};