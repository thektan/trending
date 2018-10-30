import React, {Component} from 'react';
import ReactPlaceholder from 'react-placeholder';
import FeatureStory from './FeatureStory';
import Placeholder from './Placeholder';
import Feed from './Feed';
import * as DesignerNewsUtil from '../utils/designer-news-util';
import * as HackerNewsUtil from '../utils/hacker-news-util';

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
			ready: false,
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

				this.setDesignerNewsStories(
					designerNewsStories,
					this.props.amount
				);

				this.setHackerNewsStories(hackerNewsStories, this.props.amount);
			}
		);
	}

	/**
	 * Checks if the feature story has the required data.
	 * @return {Boolean} True if the feature story is ready.
	 */
	isFeatureStoryReady() {
		return this.state.featureStory !== {};
	}

	/**
	 * Checks if all the story feeds in the compoment are loaded.
	 * @return {Boolean} True if all the feeds have data.
	 */
	isFeedReady() {
		return (this.state.designerNewsStories.length > 0)
			&& (this.state.hackerNewsStories.length > 0);
	}

	/**
	 * Checks of all the necessary data is ready to display the components.
	 * When all data is ready, set the `ready` to true and the components
	 * will display on the page.
	 * @return {Boolean} True is return if state is already ready.
	 */
	setReadyState() {
		if (this.state.ready) return true;

		if (this.isFeatureStoryReady() && this.isFeedReady()) {
			this.setState({ready: true});
		}
	}

	/**
	* Console if component updates.
	*/
	componentDidUpdate() {
		console.log('storyfeed component updated', this.state);

		this.setReadyState();
	}

	/**
	* Render the component.
	*
	* @return {string} Markup of stories.
	*/
	render() {
		return (
			<ReactPlaceholder
				ready={this.state.ready}
				customPlaceholder={<Placeholder />}
			>
				<div className="story-feed">
					<FeatureStory story={this.state.featureStory} />

					<Feed
						header={HackerNewsUtil.SOURCE_NAME}
						stories={this.state.hackerNewsStories}
					/>

					<Feed
						header={DesignerNewsUtil.SOURCE_NAME}
						stories={this.state.designerNewsStories}
					/>
				</div>
			</ReactPlaceholder>
		);
	}
}

export default StoryFeed;
