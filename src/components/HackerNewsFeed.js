import React, {Component} from 'react';
import hnapi from 'firebase-hackernews';
import FeedItem from './FeedItem';

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
						(story) =>
							<FeedItem
								commentCount={story.descendants}
								date={story.time * 1000}
								key={story.id}
								score={story.score}
								title={story.title}
								url={story.url}
							/>
					)}
				</ul>
			</div>
		);
	}
}

export default HackerNewsFeed;
