function printPrettyDate(date) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = date.getDay()
    const dayName = dayNames[day]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    let hours = date.getHours()
    let morning = "AM"
    if (hours > 12) {
        morning = "PM"
        hours -= 12
    }
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()


    const message = `Today is ${dayName}, ${month} ${day}, ${year}, and the time is ${hours}:${minutes}:${seconds} ${morning}`
    return message
}

console.log(printPrettyDate(new Date()))