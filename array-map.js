function convert2DArrayToObjectArray(arr) {
    const reformattedArr = arr.map(([key, value]) => ({ [key]: value }));
    return reformattedArr;
}

function convertArrayOfObjectsToStrings(arrObj) {
    const reformattedArr = arrObj.map((object) => (`Name: ${object.name}, Age: ${object.age}, City: ${object.city}`))
    return reformattedArr
}

function concatenateStrings(arrStr, max) {
    const reformattedArr = arrStr.map((str) => (str.length > max) ? str.substring(0, max).concat('...') : str)
    return reformattedArr
}


const data = [
    ["name", "Alice"],
    ["age", 30],
    ["city", "New York"],
];

console.log(convert2DArrayToObjectArray(data))

const objects = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
]

console.log(convertArrayOfObjectsToStrings(objects))

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

console.log(concatenateStrings(strings, 5))