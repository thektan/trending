import React, {Component} from 'react';
import FeedItem from './FeedItem';
import 'whatwg-fetch';

/**
 * Component that displays the currently popular Designer News posts.
 *
 * @class DesignerNewsFeed
 * @extends {Component}
 */
class DesignerNewsFeed extends Component {
	/**
	* Creates an instance of DesignerNewsFeed.
	*/
	constructor() {
		super();

		this.state = {
			stories: [],
		};
	}

	/**
	 * Gets the top stories and sets the state.
	 */
	getDesignerNewsStories() {
		fetch('https://www.designernews.co/api/v2/stories')
			.then((response) => response.json())
			.then((json) =>
				this.setState({stories: json.stories})
			);
	}

	/**
	* Fetches the stories when the component mounts.
	*/
	componentDidMount() {
		this.getDesignerNewsStories();
	}

	/**
	* Console if component updates.
	*/
	componentDidUpdate() {
		console.log('designer news component updated', this.state);
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
				<div>Designer News Feed</div>

				<ul>
					{stories.map(
						(story) =>
							<FeedItem
								commentCount={story.comment_count}
								date={story.created_at}
								key={story.id}
								score={story.vote_count}
								title={story.title}
								url={story.url}
							/>
					)}
				</ul>
			</div>
		);
	}
}

export default DesignerNewsFeed;
