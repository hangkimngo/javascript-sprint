function convert2DArrayToObjectArray(arr) {
    const reformattedArr = arr.map(([key, value]) => ({ [key]: value }));
    return reformattedArr;
}

function convertArrayOfObjectsToStrings(arrObj) {
    const reformattedArr = arrObj.map((object) => (`Name: ${object.name}, Age: ${object.age}, City: ${object.city}`))
    return reformattedArr
}

function concatenateStrings(arrStr, max) {
    const filteredArrr = arrStr.filter((str) => str.length >= 5)
    const reformattedArr = filteredArrr.map((str) => (str.length > 5) ? str.substring(0, 5).concat('...') : str)
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