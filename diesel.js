function calculateFines(jsonArr) {
    const cars = JSON.parse(jsonArr)
    const carsFine = []
    let totalFines = 0
    for (const car of cars) {
        const make = car[0]
        const model = car[1]
        const reg = car[2]
        const year = car[3]
        const fuel = car[4]
        let fine = 0
        if (year < 2015 && fuel == "diesel") {
            fine = 10
        }
        if (year < 2000) {
            fine = 20
        }
        totalFines += fine
        carsFine.push({ "reg": reg, "year": year, "fuel": fuel, "fine": fine })
    }
    const result = {
        "totalFines": totalFines,
        "cars": carsFine
    }
    return JSON.stringify(result)
}

const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]'

console.log(calculateFines(carData))