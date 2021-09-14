const Employee = require('../lib/Employee');

test('test to see if employee has all relevant information', () => {
    const employee = new Employee('Vince R', '050', 'some_guy@gmail.com');

    expect(employee.name).toBe('Vince R');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

