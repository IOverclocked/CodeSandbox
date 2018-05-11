const functions = require('./functions');

test("Add: 2 + 2 = 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Add: 2 + 2 not = 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
})

test("Should be false", () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

//obj test
test("Should be user Michał Osiatycki", () => {
    expect(functions.user()).toEqual({
        firstname: "Michał",
        lastname: "Osiatycki"
    })
})

//not works...
/*
test("Should be under 1600", () => {
    const num1 = 800;
    const num2 = 700;
    expect(num1 + num2).toBeLessThen(1600);
})
*/

//regex test
test('There is not I in team', () => {
    expect('team').not.toMatch(/I/i);
})

//array test
test('Admin should be in username', () => {
    username = ['john', 'keren', 'admin'];
    expect(username).toContain('admin');
})
