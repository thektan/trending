import React, {Component} from 'react';
import moment from 'moment';

/**
 * Feed item.
 *
 * @class FeedItem
 * @extends {Component}
 */
class FeedItem extends Component {
	/**
	 * Converts a timestamp into a formatted date.
	 *
	 * @param {string|number} time
	 * @return {string} Formatted date.
	 */
	getFormattedDateString(time) {
		return moment(time).fromNow();
	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		const {commentCount, score, date, title, url} = this.props;

		const formattedDate = this.getFormattedDateString(date);

		return (
			<li className="feed-item-container">
				<a href={url}>
					<span className="feed-item-title">{title}</span>
				</a>

				<div className="feed-item-metadata-container">
					{score} points - {commentCount} comments - {formattedDate}
				</div>
			</li>
		);
	}
}

export default FeedItem;
