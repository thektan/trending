import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';
import iconDiscuss from '../images/icon-discuss.svg';
import iconPopular from '../images/icon-popular.svg';
import '../css/FeedItem.css';
import {
	getFormattedDateString,
	getURLDomainName,
	toCssClassName,
} from '../utils/util';

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
		const {
			commentCount,
			discuss,
			score,
			date,
			siteUrl,
			sourceName,
			title,
			url,
			popular,
		} = this.props;

		const formattedDate = getFormattedDateString(date);

		return (
			<li className={'feed-item feed-item--' + toCssClassName(sourceName)}>
				<div className="feed-item__container">
					<div className="feed-item__score">
						{score}

						<div className="badge-container">
							{popular ?
								<div className="badge badge--popular">
									<Isvg className="icon" src={iconPopular}></Isvg>
								</div> : ''
							}

							{discuss ?
								<div className="badge badge--discuss">
									<Isvg className="icon" src={iconDiscuss}></Isvg>
								</div> : ''
							}
						</div>
					</div>

					<div className="feed-item__content">
						<a
							className="feed-item__title-link"
							href={url || siteUrl}
							target="_blank"
						>
							<span className="feed-item__title">
								{title}
							</span>

							<span className="feed-item__link">
								({getURLDomainName(url || siteUrl)})
							</span>
						</a>

						<div className="feed-item__metadata">
							<a href={siteUrl} target="_blank">
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
