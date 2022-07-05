window.index.companyMap = {

    render: function() {
        let companyMap = document.querySelector('.pageContent > .si-companyMap');
        companyMap.innerHTML =
            companyMap.innerHTML +
            '<br>we get ' +
            index.data.allLaunchpadItems.length +
            ' launch pads'
        ;
    }
};