import React, {Component} from 'react';
import moment from 'moment';
import URI from 'urijs';
import CommentPopup from './CommentPopup';
import '../css/FeedItem.css';

/**
 * Feed item.
 *
 * @class FeedItem
 * @extends {Component}
 */
class FeedItem extends Component {
	/**
	 * Initializes the state.
	 */
	constructor() {
		super();

		this.handleCommentClose = this.handleCommentClose.bind(this);

		this.state = {
			showComments: false,
		};
	}

	/**
	 * When the comment count is clicked, show the popup to display the
	 * comments by setting the visibility to true.
	 */
	handleCommentOpen() {
		this.setState({showComments: true});
	}

	/**
	 * Hide comment.
	 */
	handleCommentClose() {
		this.setState({showComments: false});
	}

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
		const {
			commentCount,
			comments,
			score,
			date,
			siteUrl,
			sourceName,
			title,
			url,
		} = this.props;

		const formattedDate = this.getFormattedDateString(date);

		return (
			<li className="feed-item">
				<div className="feed-item__container">
					<CommentPopup
						handleClose={this.handleCommentClose}
						comments={comments}
						sourceName={sourceName}
						isOpen={this.state.showComments}
					/>

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
							<a
								href={siteUrl}
								onClick={(event) => {
									event.preventDefault();
									this.handleCommentOpen();
								}}
							>
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
