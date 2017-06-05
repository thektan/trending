import React, { Component } from 'react';
import 'whatwg-fetch';

class HackerNewsFeed extends Component {
	constructor() {
		super();

		this.state = {
			stories: []
		};
	}

	componentDidMount() {
		fetch(
			'https://hacker-news.firebaseio.com/v0/topstories.json',
		).then(
			response => response.json()
		).then(
			data => this.setState({stories: data})
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
