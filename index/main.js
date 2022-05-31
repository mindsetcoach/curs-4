
let capsulesData = null;

let targetDiv = document.querySelector('div.pageContent');

axios
    .get('https://api.spacexdata.com/v4/capsules')
    .then(function (response) {
        // handle success
        capsulesData = response.data;
        // targetDiv.innerHTML = JSON.stringify(capsulesData);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;