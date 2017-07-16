import React, {Component} from 'react';

import Header from './components/Header';

import DribbbleFeed from './components/DribbbleFeed';
import StoryFeed from './components/StoryFeed';

import './css/App.css';

/**
 * The main app component with multiple feeds.
 */
class App extends Component {
	/**
	 * Render the entire application.
	 * @return {string}
	 */
	render() {
		return (
			<div className="app">
				<div className="app__section">
					<Header />
				</div>

				<div className="app__section">
					<DribbbleFeed amount={8} />
				</div>

				<div className="app__section">
					<StoryFeed />
				</div>
			</div>
		);
	}
}

export default App;
