const Employee = require('../lib/Employee');

test('checks class of employee to verify correct information', () => {
    const employee = new Employee('Vince Riv',123,'vince_dude@gmail.com');

    expect(employee.name).toBe('Vince Riv');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('checks getName function', () => {
    const employee = new Employee('Vince Riv',123,'vince_dude@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('checks getId function', () => {
    const employee = new Employee('Vince Riv',123,'vince_dude@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('checks getEmail function', () => {
    const employee = new Employee('Vince Riv',123,'vince_dude@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('checks for getRole function', () => {
    const employee = new Employee('Vince Riv',123,'vince_dude@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})