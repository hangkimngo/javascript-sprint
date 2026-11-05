function splitByDelimiter(string, delimeter) {
    return string.split(delimeter)
}

function joinWithDelimiter(stringArray, joinString) {
    return stringArray.join(joinString)
}
console.log(splitByDelimiter('One, Two, Three', ', '))
console.log(joinWithDelimiter(['Four', 'Five', 'Six'], '-*-'))