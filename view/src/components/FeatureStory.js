import React, {Component} from 'react';
import '../css/FeatureStory.css';
import {getFormattedDateString, getURLDomainName} from '../utils/util';

/**
 * The feature story which displays in big text.
 *
 * @class FeatureStory
 * @extends {Component}
 */

 const featureStoryImageElementId = 'featureStoryImage';

class FeatureStory extends Component {
	/**
	 * Get the image when this component is ready.
	 */
	componentDidMount() {
		if (this.props.story.storyUrl) {
			this.setImage(this.props.story.storyUrl);
		}
	}

	/**
	 * Sets the feature story image.
	 * @param {string} url The url to request the image from.
	 */
	setImage(url) {
		fetch('/api/imageresolver/' + encodeURIComponent(url))
			.then((response) => response.json())
			.then((data) => {
				console.log('image resolver data', data);

				let featureStoryImageElement =
					document.getElementById(featureStoryImageElementId);

				featureStoryImageElement.style.backgroundImage =
					`url('${data.imageURL}')`;
			});
	}

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

				<div className="feature-story__image-wrapper">
					<div
						id={featureStoryImageElementId}
						className="feature-story__image"
					></div>
				</div>
			</div>
		);
	}
}

export default FeatureStory;
