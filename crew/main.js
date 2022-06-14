let crew = {
    
    data: {
        allItems: []
    },

    render: function() {
        let firstTile = document.querySelector('.pageContent > .contentTile');
        firstTile.innerHTML =
            firstTile.innerHTML +
            '<br>we get ' +
            crew.data.allItems.length +
            ' crew members'
        ;
    },

    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function(response) {
                // success
                crew.data.allItems = response.data;
                crew.render();
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;
    }
};

crew.init();
