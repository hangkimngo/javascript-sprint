function printPrettyDate(date) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = date.getDay()
    const dayName = dayNames[day]
    const Date = date.getDate()
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthNames[date.getMonth()]
    const year = String(date.getFullYear()).padStart(4, '0')
    let hours = date.getHours()
    let morning = "AM"
    if (hours > 12) {
        morning = "PM"
        hours -= 12
    }
    hours = String(hours).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')


    const message = `Today is ${dayName}, ${month} ${Date}, ${year}, and the time is ${hours}:${minutes}:${seconds} ${morning}.`
    console.log(message)
}