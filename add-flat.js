function sumNestedArray(nestedArray) {
    const flattenedArray = nestedArray.flat(Infinity)
    const result = flattenedArray.filter(item => typeof item === "number")
    const total = result.reduce((sum, item) => sum + item, 0)
    return total
}
console.log(sumNestedArray([10, [5, "broken", 3], [[2, 4], "empty"]]))
