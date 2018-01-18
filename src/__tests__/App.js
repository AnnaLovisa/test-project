import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
  /* Med wrapper kallar vi på en funktion i komponenten */
  const wrapper = shallow(<App user="" />)
  expect(wrapper.text()).toBeTruthy()
});

it('should render <App /> with user', () => {
  const wrapper = shallow(<App user="anna@gribbe.se" />)
  expect(wrapper.find('div').text()).toContain("anna@gribbe.se")
});

it('call the internal method loginSuccessful', () => {
  const email = "anna@gribbe.se";
  const wrapper = mount(<App user="" />)
  wrapper.instance().loginSuccessful(email);
  expect(wrapper.state().user).toEqual(email);
});

it('call the internal method logout', () => {
  const user = "anna@gribbe.se";
  const wrapper = mount(<App user={user} />);
  expect(wrapper.state().user).toBe(user);
  wrapper.instance().logout();
  expect(wrapper.state().user).toBeFalsy();
});