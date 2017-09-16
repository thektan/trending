import React, {Component} from 'react';
import '../css/FeatureStory.css';
import {getFormattedDateString, getURLDomainName} from '../utils/util';
import ImageResolver from 'image-resolver';

/**
 * The feature story which displays in big text.
 *
 * @class FeatureStory
 * @extends {Component}
 */
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
		let imageResolver = new ImageResolver();

		imageResolver.register(new ImageResolver.FileExtension());
		imageResolver.register(new ImageResolver.MimeType());
		imageResolver.register(new ImageResolver.Opengraph());
		imageResolver.register(new ImageResolver.Webpage());

		imageResolver.resolve(
			url,
			(result) => {
				if (result) {
					console.log(result.image);
				} else {
					console.log('No image found');
				}
			}
		);
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

				<div className="background-accent
					background-accent--large
					background-accent--top-right"
				></div>
			</div>
		);
	}
}

export default FeatureStory;
