import hnapi from 'firebase-hackernews';

const BASE_SITE_URL = 'https://news.ycombinator.com/';
const SOURCE_NAME = 'Hacker News';

/**
 * Takes data returned from the hacker news api and formats it for the StoryFeed
 * component to display and combine with other api data.
 * @param  {object} data The data to format from the api.
 * @return {object} Formatted data.
 */
const formatStories = (data) => {
	return data.map(
		(story) => {
			return {
				commentCount: story.descendants,
				date: story.time * 1000,
				id: story.id,
				score: story.score,
				sourceName: SOURCE_NAME,
				sourceUrl: getSiteURL(story.id),
				storyUrl: story.url,
				title: story.title,
			};
		}
	);
};

/**
 * Gets the top stories from Hacker News.
 * @param {Number} [page=1] The set of stories.
 * @param {Number} [count=30] The amount of stories.
 * @return {Promise} Hacker news top stories.
 */
const getTopStories = (page = 1, count = 30) => {
	return hnapi().stories(
		'top',
		{
			count: count,
			page: page,
		}
	);
};

/**
 * Gets the url to the feed site.
 * @param {number} id The id of the feed item.
 * @return {string} The url to the main feed site.
 */
const getSiteURL = (id) => {
	return `${BASE_SITE_URL}item?id=${id}`;
};

export {
	formatStories,
	getTopStories,
	SOURCE_NAME,
};
