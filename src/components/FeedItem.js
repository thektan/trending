import React, {Component} from 'react';
import moment from 'moment';
import URI from 'urijs';
import '../css/FeedItem.css';

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
	 * Extracts the subdomain and domain name of a url.
	 * @param {string} url The url to extract from.
	 * @return {string} The extracted name.
	 */
	getURLDomainName(url) {
		let uri = new URI(url);

		if (uri.scheme() === '') {
			uri = new URI('http://' + url);
		}

		return uri.hostname();
	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		const {commentCount, score, date, siteUrl, title, url} = this.props;

		const formattedDate = this.getFormattedDateString(date);

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
								({this.getURLDomainName(url || siteUrl)})
							</span>
						</a>

						<div className="feed-item__metadata">
							<a href={siteUrl}>{commentCount >= 0 ? commentCount + ' comments •' : ''}</a> {formattedDate}
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default FeedItem;
