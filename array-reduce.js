function getTotalFromShoppingBasket(arr) {
    const total = arr.reduce((accumultor, item) => accumultor + item.price, 0)
    return total
}

function getAverageAge(arr) {
    if (arr.length == 0) {
        return 0
    }
    const total = arr.reduce((accumulator, object) => accumulator + object.age, 0)
    return total / arr.length
}
function concatenateObjects(arr) {
    const result = arr.reduce((accumulator, item) => {
        const k = item.key
        const v = item.value
        if (accumulator[k]) {
            accumulator[k].push(v)
        } else {
            accumulator[k] = [v]
        }
        return accumulator
    }, {})
    return result
}
const shoppingBasket = [
    { name: "Apple", price: 2.5 },
    { name: "Banana", price: 1.5 },
    { name: "Orange", price: 3 },
    { name: "Mango", price: 4 },
]

console.log(getTotalFromShoppingBasket(shoppingBasket))

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
]

console.log(getAverageAge(people))

const objects = [
    { key: "a", value: 1 },
    { key: "b", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 4 },
    { key: "b", value: 5 },
]

console.log(concatenateObjects(objects))