function initialize() {
    const outside = document.createElement('div')
    outside.classList.add('zone', 'outside')

    const inside = document.createElement('div')
    inside.classList.add('zone', 'inside')

    document.body.append(outside, inside)

    let character = null

    let mouseX = 0
    let mouseY = 0

    function isMouseInsideJail() {
        const rect = inside.getBoundingClientRect()

        return (
            mouseX >= rect.left &&
            mouseX <= rect.right &&
            mouseY >= rect.top &&
            mouseY <= rect.bottom
        )
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const characters = document.querySelectorAll('.character')

            characters.forEach(function (item) {
                item.remove()
            })

            character = null
            return
        }

        if (event.key >= 'a' && event.key <= 'z') {
            if (character !== null) {
                character.classList.remove('follow')
            }

            character = document.createElement('div')
            character.classList.add('character', 'follow')
            character.textContent = event.key

            // Set initial position immediately
            character.style.left = mouseX + 'px'
            character.style.top = mouseY + 'px'

            // Check whether the mouse is inside jail
            if (isMouseInsideJail()) {
                character.classList.add('trapped')
                character.classList.remove('follow')
            }

            document.body.appendChild(character)
        }
    })


    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX
        mouseY = event.clientY

        if (character !== null) {
            const isInside = isMouseInsideJail()

            if (isInside) {
                character.classList.add('trapped')
                character.style.left = mouseX + 'px'
                character.style.top = mouseY + 'px'
            } else if (character.classList.contains('trapped')) {
                character.classList.remove('follow')
            } else {
                character.style.left = mouseX + 'px'
                character.style.top = mouseY + 'px'
            }

        }

    })


}

initialize() 