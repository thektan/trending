import React, {Component} from 'react';
import hnapi from 'firebase-hackernews';

/**
 * Component that displays the currently popular Hacker News stories.
 *
 * @class HackerNewsFeed
 * @extends {Component}
 */
class HackerNewsFeed extends Component {
	/**
	* Creates an instance of HackerNewsFeed.
	*/
	constructor() {
		super();

		this.state = {
			stories: [],
		};
	}

	/**
	 * Gets the top stories from Hacker News and sets the state.
	 */
	getHackerNewsTopStories() {
		hnapi()
			.stories('top')
			.then(
				(stories) => {
					this.setState({stories: stories});
				}
			);
	}

	/**
	* Fetches the stories when the component mounts.
	*/
	componentDidMount() {
		this.getHackerNewsTopStories();
	}

	/**
	* Console if component updates.
	*/
	componentDidUpdate() {
		console.log('component updated', this.state);
	}

	/**
	* Render the component.
	*
	* @return {string} Markup of top stories from hacker news.
	*/
	render() {
		const {stories} = this.state;

		return (
			<div>
				<div>Hacker News Feed</div>
				<ul>
					{stories.map(
						(story) => <li key={story.id}>{story.title}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default HackerNewsFeed;
