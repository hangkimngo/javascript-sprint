class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }

    area() {
        this.semiperimeter = 1 / 2 * (this.sideA + this.sideB + this.sideC)
        return Math.sqrt(this.semiperimeter * (this.semiperimeter - this.sideA) * (this.semiperimeter - this.sideB) * (this.semiperimeter - this.sideC))
    }

    perimeter() {
        return this.semiperimeter * 2
    }
}

const triangle = new Triangle(3, 4, 5)
console.log(triangle.area())
console.log(triangle.perimeter())