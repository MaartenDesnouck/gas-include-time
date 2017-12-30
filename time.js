/**
 * Number of complete days between two dates
 *
 * @param {Date} StartDate
 * @param {Date} EndDate
 * @return {string} Number of complete days between StartDate end EndDate
 */
function dayDiff(StartDate, EndDate) {
    return Math.floor((EndDate - StartDate) / (1000 * 60 * 60 * 24));
}

/**
 * Number of complete hours between two dates
 *
 * @param {Date} StartDate
 * @param {Date} EndDate
 * @return {string} Number of complete hours between StartDate end EndDate
 */
function hourDiff(StartDate, EndDate) {
    return Math.floor((EndDate - StartDate) / (1000 * 60 * 60));
}

/**
 * Number of complete minutes between two dates
 *
 * @param {Date} StartDate
 * @param {Date} EndDate
 * @return {string} Number of complete minutes between StartDate end EndDate
 */
function minuteDiff(StartDate, EndDate) {
    return Math.floor((EndDate - StartDate) / (1000 * 60));
}

/**
 * Number of complete seconds between two dates
 *
 * @param {Date} StartDate
 * @param {Date} EndDate
 * @return {string} Number of complete seconds between StartDate end EndDate
 */
function secondDiff(StartDate, EndDate) {
    return Math.floor((EndDate - StartDate) / (1000));
}
