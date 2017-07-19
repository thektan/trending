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

const getComments = (id) => {
	console.log(id);

	return id;
};

/**
 * Gets the top stories from Hacker News.
 * @return {Promise} Hacker news top stories.
 */
const getTopStories = () => {
	return hnapi().stories('top');
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
	SOURCE_NAME,
	formatStories,
	getComments,
	getTopStories,
};
