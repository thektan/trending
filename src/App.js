import React, {Component} from 'react';
import Header from './components/Header';
import StoryFeed from './components/StoryFeed';
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
			location: '90012',
		};
	}

	/**
	 * Gets the location. This is used to get the data for the weather.
	 * @return {string} Zip code.
	 */
	getLocation() {
		let location = '90012';

		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const lat = position.coords.latitude;
					const long = position.coords.longitude;

					location = `(${lat},${long})`;
				}
			);
		}

		return location;
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
