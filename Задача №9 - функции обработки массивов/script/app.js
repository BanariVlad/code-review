let arrayNotSorted = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `wordd`, 7, 8, false, 9, 100];

const filter = function arrayClear(arr) {
    //todo in one row
    let arrayNew = arr.filter(item => typeof item === "number");
    return arrayNew.slice(0, -1);
}

console.log(filter(arrayNotSorted));