function convert2DArrayToObjectArray(arr) {
    const reformattedArr = arr.map(([key, value]) => ({ [key]: value }));
    return reformattedArr;
}

function convertArrayOfObjectsToStrings(arrObj) {
    const reformattedArr = arrObj.map((object) => Object.entries(object).map(([key, value]) => `${key}: ${value}`).join(", "))
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
    {
        J: "WtoI",
        JTwr: "t",
        VanEsY: "VreHFn",
        F: "n",
        HY: "TN",
        D: "SUlTTh"
    }
]

console.log(convertArrayOfObjectsToStrings(objects))

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

console.log(concatenateStrings(strings, 5))