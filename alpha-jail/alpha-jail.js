function initialize() {
    const outside = document.createElement('div')
    outside.classList.add('zone', 'outside')

    const inside = document.createElement('div')
    inside.classList.add('zone', 'inside')

    document.body.append(outside, inside)



    let character = null

    document.addEventListener('keydown', function (event) {
        if (event.key >= 'a' && event.key <= 'z') {
            character = document.createElement('div')
            character.classList.add('character', 'follow')
            character.textContent = event.key

            document.body.appendChild(character)
        }
    })

    document.addEventListener('mousemove', function (event) {
        if (character !== null) {


            const rect = inside.getBoundingClientRect()
            const isInside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom

            if (isInside) {
                character.classList.add('trapped')
                character.style.left = event.clientX + 'px'
                character.style.top = event.clientY + 'px'
            } else if (character.classList.contains('trapped')) {
                character.classList.remove('follow')

            } else {
                character.style.left = event.clientX + 'px'
                character.style.top = event.clientY + 'px'
            }

        }

    })


}

initialize() 