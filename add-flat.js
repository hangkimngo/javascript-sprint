function sumNestedArray(nestedArray) {
    const flattenedArray = nestedArray.flat(Infinity)
    const filter = flattenedArray.filter(item => typeof item === "number")
    const sum = filter.reduce((sum, item) = sum + item, 0)
    return sum
}