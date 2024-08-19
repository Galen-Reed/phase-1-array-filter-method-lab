// Code your solution here
function findMatching(array, name) {
    return array.filter(function (element) {
        return element.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(array, string) {
    return array.filter(function (element) {
        return element.startsWith(string);
    });
}
function matchName(array, name) {
    return array.filter(function (element) {
        return element.name === name;
    });
}