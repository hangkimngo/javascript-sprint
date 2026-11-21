function createLinks(teams) {

    // 1. Check whether the old list exists.
    const existingList = document.getElementById("team-list-nav")
    // 2. Remove the old list if necessary.
    if (existingList) {
        existingList.remove()
    }
    // 3. Create a new ul element.
    const ul = document.createElement("ul")
    // 4. Give the ul its id and class.
    ul.id = "team-list-nav"
    ul.classList.add("team-links")
    // 5. Loop through the teams.
    for (const team of teams) {
        // 6. Create an li for each team.
        const item = document.createElement("li")
        item.style.backgroundColor = team.primary
        // 7. Create the a element.
        const anchor = document.createElement("a")
        anchor.href = team.url
        anchor.style.color = team.secondary
        anchor.textContent = team.name
        // 8. Create the span element.
        const span = document.createElement("span")
        span.textContent = "[copy]"

        // 9. Attach the click event to the span.
        span.addEventListener('click', function () {
            navigator.clipboard.writeText(team.url)
        })
        // 10. Append everything in the correct order.
        item.append(anchor, span)
        ul.append(item)
    }

    // 11. Append the ul to the body.
    document.body.append(ul)
}

const teams = [
    {
        name: "Brazil",
        url: "https://en.wikipedia.org/wiki/Brazil_national_football_team",
        primary: "#ffdf00",
        secondary: "#009c3b"
    },
    {
        name: "Netherlands",
        url: "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
        primary: "#f36c21",
        secondary: "#ffffff"
    }
];

createLinks(teams);