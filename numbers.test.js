const number = require('./numbers');

test('function generaterRandomNumbers', () => {
    number.generateRandomNumbers = jest.fn().mockReturnValue(10);
    const mock = jest.spyOn(number, 'generateRandomNumbers');
    number.generateRandomNumbers();
    expect(number.generateRandomNumbers).toHaveBeenCalled();
    expect(number.generateRandomNumbers).toHaveBeenCalledTimes(1);
});