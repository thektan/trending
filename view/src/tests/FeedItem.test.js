import React from 'react';
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
