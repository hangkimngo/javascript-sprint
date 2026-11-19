function initialize() {
    const letterContainer = document.createElement('div')
    letterContainer.classList.add('letter-container')

    let selectedLetter = null

    function selectLetter(letterDiv) {
        if (selectedLetter !== null) {
            selectedLetter.classList.remove('selected')
        }

        letterDiv.classList.add('selected')
        selectedLetter = letterDiv
    }

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i)
        const letterDiv = document.createElement('div')
        letterDiv.textContent = letter
        letterDiv.classList.add('letter')
        letterDiv.style.fontSize = '14px'
        letterDiv.id = letter.toLowerCase()
        if (letter === 'A') {
            letterDiv.classList.add('selected')
            selectedLetter = letterDiv
        }

        letterDiv.addEventListener('click', function () {
            selectLetter(letterDiv)
        })
        letterContainer.appendChild(letterDiv)
    }

    document.body.appendChild(letterContainer)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const buttons = [
        { id: 'prev', text: '<' },
        { id: 'next', text: '>' },
        { id: 'decrease', text: '-' },
        { id: 'increase', text: '+' }
    ];

    for (const button of buttons) {
        const buttonElement = document.createElement('button')
        buttonElement.id = button.id
        buttonElement.textContent = button.text
        buttonContainer.appendChild(buttonElement)
    }

    document.body.appendChild(buttonContainer)

    const nextButton = document.getElementById('next')
    nextButton.addEventListener('click', function () {
        const nextLetter = selectedLetter.nextElementSibling

        if (nextLetter === null) {
            selectLetter(document.getElementById('a'))
        } else {
            selectLetter(nextLetter)
        }
    })

    const prevButton = document.getElementById('prev')
    prevButton.addEventListener('click', function () {
        const prevLetter = selectedLetter.previousElementSibling

        if (prevLetter === null) {
            selectLetter(document.getElementById('z'))
        } else {
            selectLetter(prevLetter)
        }
    })

    const increaseButton = document.getElementById('increase')
    increaseButton.addEventListener('click', function () {
        const currentSize = parseInt(selectedLetter.style.fontSize)

        if (currentSize + 2 <= 26) {
            selectedLetter.style.fontSize = (currentSize + 2) + 'px'
        }
    })

    const decreaseButton = document.getElementById('decrease')
    decreaseButton.addEventListener('click', function () {
        const currentSize = parseInt(selectedLetter.style.fontSize)

        if (currentSize - 2 >= 10) {
            selectedLetter.style.fontSize = (currentSize - 2) + 'px'
        }
    })
}

initialize()