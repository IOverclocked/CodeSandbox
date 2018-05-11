const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    user: () => {
        const User = {
            firstname: "Michał",
            lastname: "Osiatycki"
        }
        return User;
    }
};

module.exports = functions;
