const Engineer = require('../lib/Engineer');

test('check to see if engineer object is created', () => {
    const engineer = new Engineer('Not Vince', 753, 'notvince@gmail.com', 'itnotvincesgithub');

    expect(engineer.name).toBe('Not Vince');
});