import React, { Component } from 'react';
import hnapi from 'firebase-hackernews';
import 'whatwg-fetch';

class HackerNewsFeed extends Component {
	constructor() {
		super();

		this.state = {
			stories: []
		};
	}

	componentDidMount() {
		hnapi()
			.stories('top')
			.then(
				stories => {
					console.log(stories)
				}
			);
	}

	componentDidUpdate() {
		console.log('component updated', this.state);
	}

	render() {
		return (
			<div>
				<div>Hacker News Feed</div>
				<div>{this.state.stories}</div>
			</div>
		);
	}
}

export default HackerNewsFeed;
