import React, {Component} from 'react';
import FeedItem from './FeedItem';
import * as DesignerNewsUtil from '../utils/designer-news-util';
import * as HackerNewsUtil from '../utils/hacker-news-util';
import '../css/Feed.css';

/**
 * Component that displays a feed of stories.
 *
 * @class Feed
 * @extends {Component}
 */
class Feed extends Component {
	/**
	 * Story popularity is calculated using score and source.
	 * A story is popular if:
	 * - Hacker News score > 300
	 * - Designer News score > 50
	 * @param  {Number}  score The score of the story.
	 * @param  {String}  source The site the story was posted from.
	 * @return {Boolean} True if the story is popular.
	 */
	isPopular(score, source) {
		switch (source) {
			case HackerNewsUtil.SOURCE_NAME:
				if (score > 300) return true;
				break;
			case DesignerNewsUtil.SOURCE_NAME:
				if (score > 30) return true;
				break;
			default: return false;
		}
	}

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
								popular={this.isPopular(story.score, story.sourceName)}
							/>
					)}
				</ul>
			</div>
		);
	}
}

export default Feed;
