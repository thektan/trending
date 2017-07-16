import React, {Component} from 'react';
import Feed from './Feed';
import * as DesignerNewsUtil from '../utils/designer-news-util';
import * as HackerNewsUtil from '../utils/hacker-news-util';

/**
 * Displays a list of stories.
 *
 * @class HackerNewsFeed
 * @extends {Component}
 */
class StoryFeed extends Component {
	/**
	* Creates an instance of the StoryFeed.
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
		HackerNewsUtil.getTopStories().then(
			(stories) => {
				this.setState((prevState, props) => {
					let formattedStories = HackerNewsUtil.formatStories(stories);

					return {
						stories: prevState.stories.concat(formattedStories),
					};
				});
			}
		);

		DesignerNewsUtil.getStories().then(
			(stories) => {
				this.setState((prevState, props) => {
					let formattedStories = DesignerNewsUtil.formatStories(stories);

					return {
						stories: prevState.stories.concat(formattedStories),
					};
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
	* @return {string} Markup of stories.
	*/
	render() {
		return (
			<div className="story-feed">
				<Feed stories={this.state.stories} />
			</div>
		);
	}
}

export default StoryFeed;
