// === This is a collection of helper functions to help us in manipulating the data :) ===
const dayjs = require('dayjs')

/**
 * findObjectByValue --> a function to find an object with a key name and a value
 * @param {Object} obj Json Object
 * @param {String} keyName key name
 * @param {String|Number|Array|Object} searchedValue value to search
 * @returns {Object|false} return the searched object or false (if not found)
 */
function findObjectByValue(obj, keyName, searchedValue) {
    found = obj
        .filter(obj => {
            return obj[keyName] == searchedValue
        })

    if (found.length == 0) {
        return false
    }

    else { return found }
}


/**
 * validateDateFormat --> a function to validate date format
 * @param {String|Array} date date to be checked
 * @param {String} format the date format
 * @returns {boolean} return true if the format is right or false if wrong
 */
function validateDateFormat(date, format) {
    return dayjs(date).format(format) === date;
}


/**
 * getNextId --> a function to get the next ID after the highest id value in object
 * @param {Object} obj object with id key 
 * @returns {Number} return the max id number in Object + 1
 */
function getNextId(obj) {
    return (Math.max.apply(Math, obj.map(function (o) {
        return o.id;
    })) + 1);
}
/**
 * allNumeric --> a function to check if a string contains all numeric
 * @param {String} string 
 * @returns {Boolean} true if all numeric and false if not
 */
function allNumeric(string) {
    var numbers = /^[0-9]+$/
    if (string.match(numbers)) {
        return true
    }
    else {
        return false
    }
}


module.exports = {
    findObjectByValue,
    validateDateFormat,
    getNextId,
    allNumeric
}