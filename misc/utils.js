window.utils = {

    getNumberAsStringWithComma: function(number) {
        let numberAsString = number + '';
        let numberAsArray = numberAsString.split('');
        let numberAsArrayWithCommas = [];

        for (let i = numberAsArray.length - 1; i >= 0; i--) {
            numberAsArrayWithCommas.unshift(numberAsArray[i]);
            if ((numberAsArray.length - i) % 3 === 0 && i !== 0) {
                numberAsArrayWithCommas.unshift(',');
            }
        }
        let numberAsStringWithCommas = numberAsArrayWithCommas.join('');
        return numberAsStringWithCommas;
    },

    getSpaceXApiItemById: function(allItems, itemId) {
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].id === itemId) {
                return allItems[i];
            }
        }
    },

    getPrevSpaceXApiItemById: function(allItems, itemId) {
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].id === itemId && i !== 0) {
                if (i === 1) {
                    return {
                        item: allItems[i - 1],
                        isAtEdge: true
                    };
                } else {
                    return {
                        item: allItems[i - 1],
                        isAtEdge: false
                    };
                }
            }
        }
        return {
            item: null,
            isAtEdge: false
        };
    },

    getNextSpaceXApiItemById: function(allItems, itemId) {
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].id === itemId && i != allItems.length - 1) {
                if (i ===  allItems.length - 2) {
                    return {
                        item: allItems[i + 1],
                        isAtEdge: true
                    };
                } else {
                    return {
                        item: allItems[i + 1],
                        isAtEdge: false
                    };
                }
            }
        }
        return {
            item: null,
            isAtEdge: false
        };
    }
    
};