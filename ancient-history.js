function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function classifyDate(date) {
    const today = new Date()
    if (dateDiffInDays(date, today) > 365) {
        return "ancient"
    } else if (dateDiffInDays(date, today) >= 0 && dateDiffInDays(date, today) <= 365) {
        return "past"
    } else if (dateDiffInDays(date, today) < -365) {
        return "distant future"
    } else if (dateDiffInDays(date, today) < 0) {
        return "future"
    }
}

console.log()
