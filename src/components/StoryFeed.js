import React, {Component} from 'react';
import Feed from './Feed';
import * as DesignerNewsUtil from '../utils/designer-news-util';
import * as HackerNewsUtil from '../utils/hacker-news-util';
import {getFormattedDateString, getURLDomainName} from '../utils/util';

/**
 * Displays a list of stories.
 *
 * @class HackerNewsFeed
 * @extends {Component}
 */
class StoryFeed extends Component {
	/**
	* Creates an instance of the StoryFeed.
	*/
	constructor() {
		super();

		this.state = {
			featureStory: {},
			designerNewsStories: [],
			hackerNewsStories: [],
		};
	}

	/**
	 * Sets the feature story with the highest score.
	 * @param {Array} stories used to calculate which will be the feature story.
	 */
	setFeatureStory(stories) {
		this.setState((prevState, props) => {
			return {
				featureStory: this.getTopScoreStory(this.sortStoriesByScore(stories)),
			};
		});
	}

	/**
	 * Sets the designer news stories.
	 * @param {Array} stories List of stories to display.
	 * @param {Number} amount The amount of stories to display.
	 */
	setDesignerNewsStories(stories, amount) {
		this.setState({designerNewsStories: stories.slice(0, amount)});
	}

	/**
	 * Sets the hacker news stories.
	 * @param {Array} stories List of stories to display.
	 * @param {Number} amount The amount of stories to display.
	 */
	setHackerNewsStories(stories, amount) {
		this.setState({hackerNewsStories: stories.slice(0, amount)});
	}

	/**
	 * Takes a list of sorted stories from highest to lowest score and returns
	 * the first.
	 * @param {Array} sortedStories sorted from highest to lowest score.
	 * @return {Object} story object with the highest score.
	 */
	getTopScoreStory(sortedStories) {
		return sortedStories[0];
	}

	/**
	 * Sorts stories from highest to lowest score.
	 * @param {Array} stories List of stories to sort.
	 * @return {Array} stories that have been sorted.
	 */
	sortStoriesByScore(stories) {
		return stories.concat().sort(
			(storyA, storyB) => storyB.score - storyA.score
		);
	}

	/**
	* Fetches the stories when the component mounts.
	*/
	componentDidMount() {
		Promise.all(
			[
				HackerNewsUtil.getTopStories(),
				DesignerNewsUtil.getStories(),
			]
		).then(
			([hackerNewsStories, designerNewsStories]) => {
				this.setFeatureStory(hackerNewsStories);
				this.setDesignerNewsStories(designerNewsStories, this.props.amount);
				this.setHackerNewsStories(hackerNewsStories, this.props.amount);
			}
		);
	}

	/**
	* Console if component updates.
	*/
	componentDidUpdate() {
		console.log('component updated', this.state);
	}

	/**
	* Render the component.
	*
	* @return {string} Markup of stories.
	*/
	render() {
		const {featureStory} = this.state;

		return (
			<div className="story-feed">
				<div className="feature-story">
					<h1 className="feature-story__title">
						{featureStory.title}

						<span className="feature-story__score">
							{featureStory.score}
						</span>
					</h1>

					<div className="feature-story__link">
						({getURLDomainName(featureStory.storyUrl
							|| featureStory.sourceUrl)})
					</div>

					<div className="feature-story__metadata">
						<a href={featureStory.sourceUrl}>
							{featureStory.commentCount >= 0 ?
								featureStory.commentCount + ' comments •' : ''}
						</a> {getFormattedDateString(featureStory.date)}
					</div>
				</div>

				<Feed
					header={HackerNewsUtil.SOURCE_NAME}
					stories={this.state.hackerNewsStories}
				/>

				<Feed
					header={DesignerNewsUtil.SOURCE_NAME}
					stories={this.state.designerNewsStories}
				/>
			</div>
		);
	}
}

export default StoryFeed;
