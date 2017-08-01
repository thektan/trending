import React, {Component} from 'react';
import '../css/FeedItem.css';
import {getFormattedDateString, getURLDomainName} from '../utils/util';

/**
 * Feed item.
 *
 * @class FeedItem
 * @extends {Component}
 */
class FeedItem extends Component {
	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		const {commentCount, score, date, siteUrl, title, url} = this.props;

		const formattedDate = getFormattedDateString(date);

		return (
			<li className="feed-item">
				<div className="feed-item__container">
					<div className="feed-item__score">{score}</div>

					<div className="feed-item__content">
						<a className="feed-item__title-link" href={url || siteUrl}>
							<span className="feed-item__title">
								{title}
							</span>

							<span className="feed-item__link">
								({getURLDomainName(url || siteUrl)})
							</span>
						</a>

						<div className="feed-item__metadata">
							<a href={siteUrl}>
								{commentCount >= 0 ? commentCount + ' comments •' : ''}
							</a> {formattedDate}
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default FeedItem;
