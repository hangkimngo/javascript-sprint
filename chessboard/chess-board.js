function initializeChessboard() {
    console.log("JavaScript is running!");
    const chessboard = document.createElement('div')
    chessboard.classList.add('chessboard')

    let selectedSquare = null

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement('div')
            square.classList.add("square")
            if ((row + col) % 2 == 0) {
                square.classList.add("white")
            } else {
                square.classList.add("black")
            }
            square.id = `square-${row}-${col}`

            square.addEventListener("click", function () {
                if (selectedSquare != null) {
                    selectedSquare.classList.remove('selected')
                }
                square.classList.add("selected")
                selectedSquare = square;
            })

            chessboard.appendChild(square)
        }
    }

    document.body.appendChild(chessboard)


}