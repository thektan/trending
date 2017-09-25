import React, {Component} from 'react';
import ImageFilter from 'react-image-filter';
import '../css/FeatureStory.css';
import {getFormattedDateString, getURLDomainName} from '../utils/util';

const filter = 'duotone';
const filterColorOne = [74, 136, 236];
const filterColorTwo = [111, 224, 195];

/**
 * The feature story which displays in big text.
 *
 * @class FeatureStory
 * @extends {Component}
 */
class FeatureStory extends Component {
	/**
	 * Initalize the states.
	 */
	constructor() {
		super();

		this.state = {
			image: '',
		};
	}

	/**
	 * Get the image when this component is ready.
	 */
	componentDidMount() {
		if (this.props.story.storyUrl) {
			this.setImage(this.props.story.storyUrl);
		}
	}

	/**
	 * Console log when component updates with the current state.
	 */
	componentDidUpdate() {
		console.log('FeatureStory updated', this.state);
	}

	/**
	 * Sets the feature story image.
	 * @param {string} url The url to request the image from.
	 */
	setImage(url) {
		fetch('/api/imageresolver/' + encodeURIComponent(url))
			.then((response) => response.json())
			.then((data) => {
				this.setState({image: data.imageURL});
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
					<ImageFilter
						image={this.state.image}
						filter={filter}
						colorOne={filterColorOne}
						colorTwo={filterColorTwo}
						className="feature-story__image"
					/>
				</div>
			</div>
		);
	}
}

export default FeatureStory;
