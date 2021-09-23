const Intern = require('../lib/Intern');

test('checks to see if intern is created', () => {
    const intern = new Intern('Newb Vince', 852, 'amNewb@gmail.com', 'HardKnocksU');

    expect(intern.name).toBe('Newb Vince');
})