function countWords(str) {
    var words = str.split(/\s+/);
    return removeEmptyItems(words).length;
}

function removeEmptyItems(arr) {
    return arr.filter( item => {
        return item !== "";
    });
}