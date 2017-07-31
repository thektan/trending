import React, {Component} from 'react';
import FeedItem from './FeedItem';
import '../css/Feed.css';

/**
 * Component that displays a feed of stories.
 *
 * @class Feed
 * @extends {Component}
 */
class Feed extends Component {
	/**
	* Render the component.
	*
	* @return {string} Markup of top stories from hacker news.
	*/
	render() {
		const {header, stories} = this.props;

		return (
			<div className="feed__container">
				<h2 className="feed__header">{header}</h2>

				<ul className="feed__content">
					{stories.map(
						(story) =>
							<FeedItem
								commentCount={story.commentCount}
								date={story.date}
								key={story.id}
								score={story.score}
								siteUrl={story.sourceUrl}
								sourceName={story.sourceName}
								title={story.title}
								url={story.storyUrl}
							/>
					)}
				</ul>
			</div>
		);
	}
}

export default Feed;
