import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import MockDate from 'mockdate';

import Greeting from '../components/Greeting';

describe('getGreeting function', () => {
	const component = shallow(
		<Greeting />
	);

	const getGreeting = component.instance().getGreeting;

	it('says good morning when the time is 4am', () => {
		MockDate.set('1/1/2017 4:00 AM');

		expect(getGreeting())
			.toEqual('Good Morning!');
	});

	it('says good morning when the time is 9am', () => {
		MockDate.set('1/1/2017 9:00 AM');

		expect(getGreeting())
			.toEqual('Good Morning!');
	});

	it('says good morning when the time is 11:59am', () => {
		MockDate.set('1/1/2017 11:59 AM');

		expect(getGreeting())
			.toEqual('Good Morning!');
	});

	it('says good afternoon when the time is 1pm', () => {
		MockDate.set('1/1/2017 1:00 PM');

		expect(getGreeting())
			.toEqual('Good Afternoon!');
	});

	it('says good afternoon when the time is 5:59pm', () => {
		MockDate.set('1/1/2017 5:59 PM');

		expect(getGreeting())
			.toEqual('Good Afternoon!');
	});

	it('says good evening when the time is 6pm', () => {
		MockDate.set('1/1/2017 6:00 PM');

		expect(getGreeting())
			.toEqual('Good Evening!');
	});

	it('says good evening when the time is 12am', () => {
		MockDate.set('1/1/2017 12:00 AM');

		expect(getGreeting())
			.toEqual('Good Evening!');
	});

	it('says good evening when the time is 2am', () => {
		MockDate.set('1/1/2017 2:00 AM');

		expect(getGreeting())
			.toEqual('Good Evening!');
	});
});
