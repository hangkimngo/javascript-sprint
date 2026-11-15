function isAuthorizedUser(arr) {
    return function (id) {
        return arr.includes(id)
    }
}
const check = isAuthorizedUser([1, 2, 3])

console.log(check(5))
console.log(check(4))
console.log(check(3))
console.log(check(2))
console.log(check(1))

console.log(isAuthorizedUser([4, 5, 6])(10))
console.log(isAuthorizedUser(['A', 'B', 'C'])('C'))