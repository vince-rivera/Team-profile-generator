const Manager = require('../lib/Manager');


test('checks to ensure manager generates', () => {
    const manager = new Manager('Vinny Rivvy',646,'vinrivvy@gmail.com',36);

    expect(manager.name).toBe('Vinny Rivvy');
});

test('checks for office number', () => {
    const manager = new Manager('Vinny Rivvy',646,'vinrivvy@gmail.com',36);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('testing getRole() function', () => {
    const manager = new Manager('Vinny Rivvy',646,'vinrivvy@gmail.com',36);
    
    expect(manager.getRole()).toBe('Manager');
});
