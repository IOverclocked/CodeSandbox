const functions = require('./functions');

test("Add: 2 + 2 = 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});
