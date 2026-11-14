function filterOutOddNumbers(arr) {
    const oddArr = arr.filter((number) => number % 2 == 0)
    return oddArr
}

function filterObjectsByNameLength(arrObj, max) {
    const result = arrObj.filter((object) => object.name.length <= max)
    return result
}

function compoundFilter(arrObj) {
    const result = arrObj.filter((object) => object.code.length > 5 && !object.category.includes("special") && object.price > 50 && object.location != "Underground")
    return result
}

const objects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]

console.log(filterObjectsByNameLength(objects, 5))
const products = [
    {
        code: "ABC123",
        category: "electronics",
        price: 75,
        location: "Store",
    },
    {
        code: "XYZ456",
        category: "clothing",
        price: 30,
        location: "Mall",
    },
    {
        code: "PQR789",
        category: "special items",
        price: 60,
        location: "Underground",
    },
    {
        code: "LMN012",
        category: "accessories",
        price: 90,
        location: "Street",
    },
]

console.log(compoundFilter(products))