import React, {Component} from 'react';
import Header from './components/Header';
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
					<div className="app__column app__column--fill">
						<StoryFeed amount={6} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
