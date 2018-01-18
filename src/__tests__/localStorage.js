import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  const email = 'anna@gribbe.se';
  localStorageUtils.saveUserToLocalStorage(email);
  expect(localStorageUtils.getUserFromLocalStorage()).toEqual(email);

});

it('should get empty user from localStorage', () => {
  expect(localStorageUtils.getUserFromLocalStorage()).toBeFalsy();
});

