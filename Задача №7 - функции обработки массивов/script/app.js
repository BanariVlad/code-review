let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayOut = function arrayRangeOut(arr , start, finish) {
    return arr.splice(start, finish - 1);
};

console.log(arrayOut(arrayNums, 2, 4));