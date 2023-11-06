const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');
test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected);
})


test("One dollar should be 146.26168224299065420560747663551 yens", function() {

    
    const yens = fromDollarToYen(3.5);

    
    const expected = 3.5 * 146.2616822429906542056074766355; 
    
    
     expect(yens).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One yen should be 0,00555910543130990415335463258786 pounds", function() {

    
    const pounds = fromYenToPound(3.5);
    
    const expected = 3.5 * 0.00555910543130990415335463258786; 
    
    
     expect(pounds).toBe(expected);
})