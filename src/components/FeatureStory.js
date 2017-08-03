import React, {Component} from 'react';
import '../css/FeatureStory.css';
import {getFormattedDateString, getURLDomainName} from '../utils/util';

/**
 * The feature story which displays in big text.
 *
 * @class FeatureStory
 * @extends {Component}
 */
class FeatureStory extends Component {
	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		const {
			commentCount,
			score,
			date,
			sourceUrl,
			title,
			storyUrl,
		} = this.props.story;

		const formattedDate = getFormattedDateString(date);

		return (
			<div className="feature-story">
				<h1 className="feature-story__title">
					<a href={storyUrl || sourceUrl} target="_blank">
						{title}
					</a>

					<span className="feature-story__score">
						{score}
					</span>

					<span className="feature-story__link">
						({getURLDomainName(storyUrl || sourceUrl)})
					</span>
				</h1>

				<div className="feature-story__metadata">
					<a href={sourceUrl} target="_blank">
						{commentCount >= 0 ?
							commentCount + ' comments •' : ''}
					</a> {formattedDate}
				</div>

				<div className="background-accent
					background-accent--large
					background-accent--top-right"
				></div>
			</div>
		);
	}
}

export default FeatureStory;
