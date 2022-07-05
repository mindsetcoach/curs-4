window.index = {
    
    data: {
        allLaunchpadItems: [],
        companyInfo: null
    },

    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/company')
            .then(function(response) {
                // success
                index.data.companyInfo = response.data;
                index.companyInfo.render();
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
                index.companyMap.render();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;
    }
};

index.init();
