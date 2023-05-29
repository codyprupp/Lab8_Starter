// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('000-000-0000 is valid phone number', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

test ('(123) 456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('0-0-0 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('0-0-0')).toBe(false);
});

test('(1234567890) is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(1234567890)')).toBe(false);
});

// isEmail
test('crupp@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('crupp@ucsd.edu')).toBe(true);
});

test('hello@gmail.gov is a valid email', () => {
    expect(functions.isEmail('hello@gmail.gov')).toBe(true);
})

test('asdf@ is not a valid email', () => {
    expect(functions.isEmail('asdf@')).toBe(false);
})

test('cse110@cse110. is not a valid email', () => {
    expect(functions.isEmail('cse110@cse110.')).toBe(false);
})

// isStrongPassword
test('aA000 is a strong password', () => {
    expect(functions.isStrongPassword('aA000')).toBe(true);
})

test('password is a strong password', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('asdofj1029j1092dj2019 is not a strong password', () => {
    expect(functions.isStrongPassword('asdofj1029j1092dj2019')).toBe(false);
});

test('hi is not a strong password', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

// isDate
test('0/0/0000 is a valid date', () => {
    expect(functions.isDate('0/0/0000')).toBe(true);
});

test('12/12/9999 is a valid date', () => {
    expect(functions.isDate('12/12/9999')).toBe(true);
});

test('0/0/0 is not a valid date', () => {
    expect(functions.isDate('0/0/0')).toBe(false);
});

test('0 is not a valid date', () => {
    expect(functions.isDate('0')).toBe(false);
});

// isHexColor
test('#FFFFFF is a valid hex color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('0A0 is a valid hex color', () => {
    expect(functions.isHexColor('0A0')).toBe(true);
});

test('##FFFFFF is not a valid hex color', () => {
    expect(functions.isHexColor('##FFFFFF')).toBe(false);
});

test('0 is not a valid hex color', () => {
    expect(functions.isHexColor('0')).toBe(false);
});