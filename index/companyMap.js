window.index.companyMap = {

    map: null,

    render: function() {

        index.companyMap.map = L.map('companyMap').setView([35, 10], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(
            index.companyMap.map
        );

        index.companyMap.setLaunchpadsLocations();
    },

    setLaunchpadsLocations: function() {
        let allLaunchpads = index.data.allLaunchpadItems;

        for (let i = 0; i < allLaunchpads.length; i++) {

            let launchpad = allLaunchpads[i];

            L.marker([launchpad.latitude, launchpad.longitude]).addTo(
                index.companyMap.map
            );
        }
    }
};