import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
  expect(validateEmail('anna@gribbe.se')).toBeTruthy();
});

it('fails on invalid email', () => {
  expect(validateEmail('fdsfdsj')).toBeFalsy();
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
  expect(validatePassword('asdfgHj8')).toBeTruthy();
});

it('invalid password: missing digit', () => {
  expect(validatePassword('asdfgHjk')).toBeFalsy();
});

it('invalid password: missing 1 uppercase', () => {
  expect(validatePassword('asdfghj8')).toBeFalsy();
});
