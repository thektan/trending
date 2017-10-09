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
	 * - Designer News score > 30
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
	 * Determines if the comment count is considered to be a "discussion."
	 * A "discussion" is a story with a high amount of comments based
	 * on the story source.
	 * @param {Number} comments The comment count of the story.
	 * @param {String} source The source's site name.
	 * @return {Boolean} True if the story is a discussion.
	 */
	isDiscussion(comments, source) {
		switch (source) {
			case HackerNewsUtil.SOURCE_NAME:
				if (comments > 200) return true;
				break;
			case DesignerNewsUtil.SOURCE_NAME:
				if (comments > 20) return true;
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
								discuss={this.isDiscussion(
									story.commentCount,
									story.sourceName
								)}
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
