export class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }

    area() {
        this.semiperimeter = this.perimeter() / 2
        return Math.sqrt(this.semiperimeter * (this.semiperimeter - this.sideA) * (this.semiperimeter - this.sideB) * (this.semiperimeter - this.sideC))
    }

    perimeter() {
        return this.sideA + this.sideB + this.sideC
    }
}

export const triangle = new Triangle(3, 4, 5)
console.log(triangle.area())
console.log(triangle.perimeter())