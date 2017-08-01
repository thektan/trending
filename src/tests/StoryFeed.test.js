import React from 'react';
import {shallow} from 'enzyme';

import StoryFeed from '../components/StoryFeed';

describe('getTopScoreStory function', () => {
	const component = shallow(<StoryFeed />);

	const sortedStories = [
		{id: 3, score: 300, title: 'Story C Title'},
		{id: 1, score: 100, title: 'Story A Title'},
		{id: 2, score: 50, title: 'Story B Title'},
	];

	const getTopScoreStory = component.instance().getTopScoreStory;

	it('gets the story with the highest score', () => {
		expect(getTopScoreStory(sortedStories))
			.toEqual({id: 3, score: 300, title: 'Story C Title'});
	});
});

describe('sortStoriesByScore function', () => {
	const component = shallow(<StoryFeed />);

	const stories = [
		{id: 1, score: 100, title: 'Story A Title'},
		{id: 2, score: 50, title: 'Story B Title'},
		{id: 3, score: 300, title: 'Story C Title'},
	];

	const sortedStories = [
		{id: 3, score: 300, title: 'Story C Title'},
		{id: 1, score: 100, title: 'Story A Title'},
		{id: 2, score: 50, title: 'Story B Title'},
	];

	const sortStoriesByScore = component.instance().sortStoriesByScore;

	it('sorts stories from highest to lowest score', () => {
		expect(sortStoriesByScore(stories))
			.toEqual(sortedStories);
	});
});
