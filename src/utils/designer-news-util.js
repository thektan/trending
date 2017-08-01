import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://www.designernews.co/api/v2/';
const BASE_SITE_URL = 'https://www.designernews.co/';
const SOURCE_NAME = 'Designer News';

/**
 * Takes data returned from the api and formats it for the StoryFeed
 * component to display and combine with other api data.
 * @param  {object} data The data to format from the api.
 * @return {object} Formatted data.
 */
const formatStories = (data) => {
	return data.map(
		(story) => {
			return {
				commentCount: story.comment_count,
				date: story.created_at,
				id: story.id,
				score: story.vote_count,
				sourceName: SOURCE_NAME,
				sourceUrl: getSiteURL(story.id),
				storyUrl: story.url,
				title: story.title,
			};
		}
	);
};


/**
 * Gets the url to the feed site in the format /stories/{id}.
 * @param {number} id The id of the feed item.
 * @return {string} The url to the main feed site.
 */
const getSiteURL = (id) =>
	`${BASE_SITE_URL}stories/${id}`;

/**
 * Gets the top designer news stories.
 * @return {object} The JSON data of stories.
 */
const getStories = () =>
	fetch(`${BASE_URL}stories`)
		.then((response) => response.json())
		.then((data) => formatStories(data.stories));

export {
	getStories,
	SOURCE_NAME,
};
