import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import MockDate from 'mockdate';

import FeedItem from '../components/FeedItem';

describe('FeedItem', () => {
	it('renders', () => {
		MockDate.set(1499108740959);

		const component = renderer.create(
			<FeedItem
				commentCount={1}
				date={1499094043 * 1000}
				score={1}
				siteUrl='https://testurl.com'
				title='Test Title'
				url='https://testurl.com'
			/>
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();

		MockDate.reset();
	});
});

describe('getURLDomainName function', () => {
	const component = shallow(
		<FeedItem
			commentCount={1}
			date={1499094043 * 1000}
			score={1}
			siteUrl='https://testurl.com'
			title='Test Title'
			url='https://testurl.com'
		/>
	);

	const getURLDomainName = component.instance().getURLDomainName;

	it('handles basic url string', () => {
		expect(getURLDomainName('https://domain.com'))
			.toEqual('domain.com');
	});

	it('handles url with a subdomain', () => {
		expect(getURLDomainName('https://sub.domain.com'))
			.toEqual('sub.domain.com');
	});

	it('handles url with multiple parameters', () => {
		expect(getURLDomainName('https://domain.com/extra/pages?a=testing&b=another'))
			.toEqual('domain.com');
	});

	it('handles url with file type', () => {
		expect(getURLDomainName('http://domain.com/file.pdf'))
			.toEqual('domain.com');
	});

	it('handles url without http', () => {
		expect(getURLDomainName('domain.com'))
			.toEqual('domain.com');
	});
});
