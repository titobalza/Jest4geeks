// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
const fromEuroToDollar = (a) => {
    return a * 1.07
}
const fromDollarToYen = (a) => {
    return a * 146.26168224299065420560747663551
}
const fromYenToPound = (a) => {
    return a * 0.00555910543130990415335463258786
}
// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};