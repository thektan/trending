import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://www.designernews.co/api/v2/';
const BASE_SITE_URL = 'https://www.designernews.co/';

/**
 * Gets the url to the feed site in the format /stories/{id}.
 * @param {number} id The id of the feed item.
 * @return {string} The url to the main feed site.
 */
const getSiteStoriesURL = (id) =>
	`${BASE_SITE_URL}stories/${id}`;

/**
 * Gets the top designer news stories.
 * @return {object} The JSON data.
 */
const getStories = () =>
	fetch(`${BASE_URL}stories`)
		.then((response) => response.json());

export {getSiteStoriesURL, getStories};
