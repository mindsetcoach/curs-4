let launches = {
    
    data: {
        allItems: [],
        nextLaunch: null
    },

    render: function() {
        let firstTile = document.querySelector('.pageContent > .contentTile');
        firstTile.innerHTML =
            firstTile.innerHTML +
            '<br>we get ' +
            launches.data.allItems.length +
            ' launches'
        ;
    },

    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(function(response) {
                // success
                launches.data.allItems = response.data;
                launches.render();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;
    }
};

launches.init();
