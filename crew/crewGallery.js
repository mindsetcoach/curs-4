
window.crew.crewGallery = {

    getSortedCrew: function(crewItems) {

        let compareFunction = function(crewMember1, crewMember2) {
            if (crewMember1.name < crewMember2.name) {
                return -1;
            }
            if (crewMember1.name > crewMember2.name) {
                return 1;
            }
            return 0;
        };

        let cloneCrewArray = function(items) {
            let newCrewItems = [];
            for (let i = 0; i < items.length; i++) {
                newCrewItems.push({
                    name: items[i].name,
                    agency: items[i].agency,
                    image: items[i].image,
                    status: items[i].status,
                    id: items[i].id
                });
            }
            return newCrewItems;
        };

        let sortedArray = cloneCrewArray(crewItems);
        sortedArray.sort(compareFunction);

        return sortedArray;
    },

    buildGallery: function(popupClass) {

        let allItems = crew.data.allItems;

        let itemsParent = document.querySelector('.' + popupClass + ' .modal-body');
        let leaveUnsortedButton = document.querySelector('.' + popupClass + ' .si-leave-unsorted');
        let sortByNameButton = document.querySelector('.' + popupClass + ' .si-sort-by-name');

        sortByNameButton.addEventListener('click', function() {
            let theSortedCrewList =
                crew.crewGallery.getSortedCrew(allItems);
            // call again the fillGalleryContent() function, with new, sorted, data
            crew.crewGallery.fillGalleryContent(itemsParent, theSortedCrewList);
            // also hide the current button and show the other one
            sortByNameButton.style.display = 'none';
            leaveUnsortedButton.style.display = 'block';

            crew.data.isGalerySorted = true;
        });
        leaveUnsortedButton.addEventListener('click', function() {
            // call again the fillGalleryContent() function, with the original, unsorted, data
            crew.crewGallery.fillGalleryContent(itemsParent, allItems);
            // also hide the current button and show the other one
            leaveUnsortedButton.style.display = 'none';
            sortByNameButton.style.display = 'block';

            crew.data.isGalerySorted = false;
        });

        if (crew.data.isGalerySorted) {
            let theSortedCrewList =
                crew.crewGallery.getSortedCrew(allItems);
            crew.crewGallery.fillGalleryContent(itemsParent, theSortedCrewList);
        } else {
            crew.crewGallery.fillGalleryContent(itemsParent, allItems);
        }

    },

    fillGalleryContent: function(parent, items) {

        parent.innerHTML = '';

        for (let i = 0; i < items.length; i++) {
            let divElement = document.createElement('div');
            let imgElement = document.createElement('img');
            let nameElement = document.createElement('div');

            divElement.classList.add('galleryItem');
            divElement.setAttribute('data-crew-id', items[i].id);
            divElement.addEventListener('click', function(event) {
                let theClickedItem = event.currentTarget;
                let crewId = theClickedItem.dataset.crewId;
                crew.crewGallery.buildCarousel(crewId);
            });
            imgElement.setAttribute('src', items[i].image);
            imgElement.classList.add('galleryPhoto');
            nameElement.innerHTML = items[i].name;

            divElement.appendChild(imgElement);
            divElement.appendChild(nameElement);

            parent.appendChild(divElement);
        }
    },

    buildCarousel: function(id) {

        // we make sure we modify our application state (crew.data object) with new modal
        crew.data.currentlyOpenedPopupClass = 'si-crewCarousel';

        // first, we need to hide the gallery and show the carousel
        let galleryModal = document.querySelector('.si-crewGallery.modal');
        let carouselModal = document.querySelector('.si-crewCarousel.modal');

        galleryModal.style.display = 'none';
        carouselModal.style.display = 'block';

        // we make sure we add the click event for the carousel button
        let backToGalleryButton = document.querySelector('.si-crewCarousel.modal .si-back-to-gallery');
        backToGalleryButton.addEventListener('click', function() {
            carouselModal.style.display = 'none';
            galleryModal.style.display = 'block';

            // we make sure we modify our application state (crew.data object) with new modal
            crew.data.currentlyOpenedPopupClass = 'si-crewGallery';
        });

        let allItems = crew.data.allItems;
    },

    renderTile: function() {
        // this tile is rendered directly in the HTML
    },

    onTileClicked: function() {

        let popupClass = crew.data.currentlyOpenedPopupClass;

        document
            .querySelector('div.modal.' + popupClass)
            .style.display = 'block';

        crew.crewGallery.buildGallery(popupClass);
    }
}