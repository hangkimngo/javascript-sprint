const mathObj = {
    abs(val) {
        return Math.abs(val)
    },

    isEven(val) {
        return val % 2 === 0
    },

    isOdd(val) {
        return val % 2 === 1 || val % 2 === -1
    },

    isStrictlyPositive(val) {
        return Math.sign(val) === 1
    },

    min(val1, val2) {
        return Math.min(val1, val2)
    },

    max(val1, val2) {
        return Math.max(val1, val2)
    }
}
