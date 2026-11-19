function initialize() {
    const content = document.createElement('div')
    content.id = 'content'

    const paragraph = document.createElement('p')
    paragraph.textContent = 'code'

    content.appendChild(paragraph)
    document.body.appendChild(content)

    const control = document.createElement('div')
    control.classList.add('controls')

    const buttons = [
        { id: 'bold', text: 'B' },
        { id: 'italic', text: 'I' },
        { id: 'underline', text: 'U' },
        { id: 'highlight', text: 'Highlight' },
    ]

    for (const button of buttons) {
        const buttonElement = document.createElement('button')
        buttonElement.id = button.id
        buttonElement.textContent = button.text
        control.appendChild(buttonElement)
    }

    document.body.appendChild(control)

    const boldButton = document.getElementById('bold')
    boldButton.addEventListener('click', function () {
        paragraph.classList.toggle('bold')
    })

    const italicButton = document.getElementById('italic')
    italicButton.addEventListener('click', function () {
        paragraph.classList.toggle('italic')
    })

    const underlineButton = document.getElementById('underline')
    underlineButton.addEventListener('click', function () {
        paragraph.classList.toggle('underline')
    })

    const highlightButton = document.getElementById('highlight')
    highlightButton.addEventListener('click', function () {
        content.classList.toggle('highlight')
    })
}

initialize()