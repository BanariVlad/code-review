let nums = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSorted = function deletesDuplicateFromArray(arr) {
    //todo use arrow function
    //todo Use Set (with destructuring)
    let uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) === pos;
    })
    return uniqueArray.sort();
}

console.log(uniqueSorted(nums));