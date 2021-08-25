const colors = ['red', 'green', 'blue'];

const checkColor = function outputsIndexOfColor(arr, color) {
    return arr.indexOf(color);
}

console.log(checkColor(colors, 'green'));
console.log(checkColor(colors, 'red'));
console.log(checkColor(colors, 'orange'));

