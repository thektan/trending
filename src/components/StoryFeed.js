import React, {Component} from 'react';
import Feed from './Feed';
import * as HackerNewsUtil from '../utils/hacker-news-util';

/**
 * Displays a list of stories.
 *
 * @class HackerNewsFeed
 * @extends {Component}
 */
class StoryFeed extends Component {
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
		HackerNewsUtil.getHackerNewsTopStories().then(
			(stories) => {
				this.setState({
					stories: HackerNewsUtil.formatHackerNewsStories(stories)
				});
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
		const {stories} = this.state;

		return (
			<div className="story-feed">
				<Feed stories={this.state.stories} />
			</div>
		);
	}
}

export default StoryFeed;
