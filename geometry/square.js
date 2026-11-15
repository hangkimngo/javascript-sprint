import { Rectangle } from "./rectangle"
export class Square extends Rectangle {
    constructor(side) {
        super(side, side)
        this.side = side
    }
}

export const rectangle = new Rectangle(5, 3)
export const square = new Square(4)