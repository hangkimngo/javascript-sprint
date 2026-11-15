import { Rectangle } from "./rectangle"
class Square extends Rectangle {
    constructor(side) {
        super()
        this.side = side
    }
}

const rectangle = new Rectangle(5, 3)
const square = Square(4)