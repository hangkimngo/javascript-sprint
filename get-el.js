function getElementsByTag(tag) {
    return document.getElementsByTagName(tag)
}

function getElementsByClassName(classname) {
    return document.getElementsByClassName(classname)
}

function getElementById(id) {

    const element = document.getElementById(id)
    if (element === null) {
        return undefined
    }
    return element
}

function getElementsByAttribute(attributeName, attributeVal) {
    if (attributeVal === undefined) {
        return document.querySelectorAll(`[${attributeName}]`)
    }
    return document.querySelectorAll(`[${attributeName}="${attributeVal}"]`)
}