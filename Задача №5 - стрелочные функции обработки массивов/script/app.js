let arrayTest = [1, 2, 3, 4, 5];

const convert = function (callback, arr) {
    return callback(arr);
}

const square = function (arrNums) {
    return arrNums.map(function (x) {
        return Math.pow(x, 2);
    });
}

console.log(arrayTest);
console.log(convert(square, arrayTest));
