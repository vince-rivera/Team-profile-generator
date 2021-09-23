const Engineer = require('../lib/Engineer');

test('check to see if engineer object is created', () => {
    const engineer = new Engineer('Not Vince', 753, 'notvince@gmail.com', 'itnotvincesgithub');

    expect(engineer.name).toBe('Not Vince');
});

test('check if github is input', () => {
    const engineer = new Engineer('Not Vince', 753, 'notvince@gmail.com', 'itnotvincesgithub');

    expect(engineer.github).toEqual(expect.any(String));
});

test('check getRole() function', () => {
    const engineer = new Engineer('Not Vince', 753, 'notvince@gmail.com', 'itnotvincesgithub');

    expect(engineer.getRole()).toBe('Engineer');
})

test('checks getGitHub() function', () => {
    const engineer = new Engineer('Not Vince', 753, 'notvince@gmail.com', 'itnotvincesgithub');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
})