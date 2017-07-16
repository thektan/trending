import hnapi from 'firebase-hackernews';

const SOURCE_NAME = 'Hacker News';

/**
 * Takes data returned from the hacker news api and formats it for the StoryFeed
 * component to display and combine with other api data.
 * @param  {object} data The data to format from the api.
 * @return {object} Formatted data.
 */
const formatHackerNewsStories = (data) => {
	return data.map(
		(story) => {
			let formattedItem = {};

			formattedItem.commentCount = story.descendants;
			formattedItem.date = story.time * 1000;
			formattedItem.id = story.id;
			formattedItem.score = story.score;
			formattedItem.sourceName = SOURCE_NAME;
			formattedItem.sourceUrl = getSiteURL(story.id);
			formattedItem.storyUrl = story.url;
			formattedItem.title = story.title;

			return formattedItem;
		}
	);
}

/**
 * Gets the top stories from Hacker News and sets the state.
 */
const getHackerNewsTopStories = () => {
	return hnapi().stories('top');
}

/**
 * Gets the url to the feed site.
 * @param {number} id The id of the feed item.
 * @return {string} The url to the main feed site.
 */
const getSiteURL = (id) => {
	return 'https://news.ycombinator.com/item?id=' + id;
}

export {
	formatHackerNewsStories,
	getHackerNewsTopStories,
};
