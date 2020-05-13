import React from 'react';
import { shallow } from 'enzyme';
import ExpenseLDashboard from '../../components/ExpenseDashboard';


test('should render ExpenseLDashboard', () => {
    const wrapper = shallow(<ExpenseLDashboard />);
    expect(wrapper).toMatchSnapshot();
});