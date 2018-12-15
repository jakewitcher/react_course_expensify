import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={'$1.95'} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={'$1,141.95'} />);
    expect(wrapper).toMatchSnapshot();
});