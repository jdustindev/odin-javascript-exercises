const removeFromArray = function(arr, ...itemsToRemove) {
    newArr = arr.filter(item => {
        return !itemsToRemove.includes(item);
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
