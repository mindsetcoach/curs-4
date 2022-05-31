let allTiles = document.querySelectorAll('.contentTile');

let onCloseButtonClicked = function() {
    // hide popup
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
};

let onTileClicked = function() {
    // show popup
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';

    // register close event for popup
    let closeButton = document.querySelector('.popup > button');
    closeButton.addEventListener('click', onCloseButtonClicked);
};

for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener('click', onTileClicked);
}

console.log('');