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
	* Fetches the stories when the component mounts.
	*/
	componentDidMount() {
		hnapi()
			.stories('top')
			.then(
				(stories) => {
					console.log(stories);

					this.setState(
						{
							stories: stories,
						}
					);
				}
			);
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
		const items = this.state.stories.map(
			(story) => <li>{story.title}</li>
		);

		return (
			<div>
				<div>Hacker News Feed</div>
				<ul>{items}</ul>
			</div>
		);
	}
}

export default HackerNewsFeed;
