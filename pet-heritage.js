class Pet {
    constructor(name, age, species) {
        this.name = name
        this.age = age
        this.species = species
    }

    makeSound() {
        console.log(`I am a ${this.species}`)
    }
}

class Dog extends Pet {
    constructor(name, age, breed, favoriteToy) {
        super(name, age, 'Dog')
        this.breed = breed
        this.favoriteToy = favoriteToy
    }

    fetch() {
        console.log(`${this.name} is fetching its ${this.favoriteToy}`)
    }
}

class Cat extends Pet {
    constructor(name, age, color, favoriteNapSpot) {
        super(name, age, 'Cat')
        this.color = color
        this.favoriteNapSpot = favoriteNapSpot
    }

    purr() {
        console.log(`${this.name} purrs on the ${this.favoriteNapSpot}`)
    }
}

const pet = new Pet('Teri', 10, 'Bird')
pet.makeSound()

const dog = new Dog('Bruno', 7, 'Spaniel', 'tennis ball')
dog.makeSound()
dog.fetch()

const cat = new Cat('Paws', 2, 'black and white', 'mat')
cat.makeSound()
cat.purr()