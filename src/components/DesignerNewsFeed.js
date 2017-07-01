import React, {Component} from 'react';
import FeedItem from './FeedItem';
import '../css/Feed.css';
import * as DNAPI from '../utils/designer-news-api';

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
	 * Gets the top stories and sets the state.
	 */
	getDesignerNewsStories() {
		DNAPI.getStories().then(
			(data) =>
				this.setState({stories: data})
		);
	}

	/**
	* Render the component.
	*
	* @return {string} Markup of top stories from hacker news.
	*/
	render() {
		const {stories} = this.state;

		return (
			<div className="feed__container">
				<div className="feed__title">Designer News</div>

				<ul className="feed__content">
					{stories.map(
						(story) =>
							<FeedItem
								commentCount={story.comment_count}
								date={story.created_at}
								key={story.id}
								score={story.vote_count}
								siteUrl={DNAPI.getSiteStoriesURL(story.id)}
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
