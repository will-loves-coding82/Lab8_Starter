// unit.test.js

/* TODO - Part 2
 * Create 2 tests that should be true, and 2 tests that should be false for each function (4 tests x 5 functions = 20 tests).
 * For clarification, all of your tests should pass, but you should expect two of your tests to return a true response and two of your tests to return a false response
 *  e.g. expect(2+2).toBe(4) and expect(4+4).toBe(10)
 */
const functions = require('../code-to-unit-test/unit-test-me.js');


test("Checking phone numbers", ()=> {
    expect(functions.isPhoneNumber("818-988-2312")).toBe(true);
    expect(functions.isPhoneNumber("888-028-3655")).toBe(true);

    expect(functions.isPhoneNumber("819-57-2381")).toBe(false);
    expect(functions.isPhoneNumber("2-09992183")).toBe(false);
})

test("Checking emails", ()=> {
    expect(functions.isEmail("erush@ucsd.edu")).toBe(true);
    expect(functions.isEmail("trueEmail@gmail.com")).toBe(true);

    expect(functions.isEmail("notAnEmail$%yahoo.com")).toBe(false);
    expect(functions.isEmail("alsoInvalid@.com")).toBe(false);
})

test("Checking passwords", ()=> {
    expect(functions.isStrongPassword("HappyDog123")).toBe(true);
    expect(functions.isStrongPassword("Strong_example")).toBe(true);

    expect(functions.isStrongPassword("000")).toBe(false);
    expect(functions.isStrongPassword("ExtremelyLongPassword")).toBe(false);
})

test("Checking dates", ()=> {
    expect(functions.isDate("11/19/2022")).toBe(true);
    expect(functions.isDate("12/9/2001")).toBe(true);

    expect(functions.isDate("1/1/02")).toBe(false);
    expect(functions.isDate("07/05/00")).toBe(false);
})

test("Checking hex colors", ()=> {
    expect(functions.isHexColor("#ffffff")).toBe(true);
    expect(functions.isHexColor("#bb006a")).toBe(true);

    expect(functions.isHexColor("#ggzz4f")).toBe(false);
    expect(functions.isHexColor("#11")).toBe(false);


})