const shallowCopy = Array.from(original)
shallowCopy.hobbies = ["reading", "cooking", "hiking", "swimming"]
const deepCopy = JSON.parse(JSON.stringify(original))
deepCopy.address.street = "124 May Street"