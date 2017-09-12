import React, {Component} from 'react';
import Header from './components/Header';
import StoryFeed from './components/StoryFeed';
import storage from 'local-storage';
import './css/App.css';

/**
 * The main app component with multiple feeds.
 */
class App extends Component {
	/**
	 * Initializes state.
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.state = {
			location: storage.get('location') || '90012',
		};
	}

	/**
	 * Render the entire application.
	 * @return {string}
	 */
	render() {
		return (
			<div className="app">
				<div className="app__section">
					<Header
						weatherLocation={this.state.location}
						weatherUnit="f"
					/>
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
