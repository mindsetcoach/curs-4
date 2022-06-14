let index = {
    
    data: {
        allLaunchpadItems: [],
        companyInfo: null
    },

    renderCompanyInfo: function() {
        let companyInfo = document.querySelector('.pageContent > .companyInfo');
        companyInfo.innerHTML =
            companyInfo.innerHTML +
            '<br>we get ' +
            index.data.companyInfo.name +
            ' as the company name'
        ;
    },

    renderCompanyMap: function() {
        let companyMap = document.querySelector('.pageContent > .companyMap');
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

index.init();
