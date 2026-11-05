function getValueFromKey(object, key) {
    return object[key]
}

function addKeyValuePairs(object1, newpair) {
    const newObj = {...object1,...newpair}
    return newObj
}
const location = {
    city: 'Tallinn',
    country: 'Estonia',
}


console.log(getValueFromKey(location, 'city'))
console.log(getValueFromKey(location, 'continent'))
console.log(addKeyValuePairs(location, { airports: ['TLL'] }))
console.log(addKeyValuePairs(location, { highestElevation: 64 }))