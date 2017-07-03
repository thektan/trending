import React, {Component} from 'react';
import weather from 'yahoo-weather';
import '../css/Weather.css';

/**
 * Shows the current weather.
 *
 * @class Weather
 * @extends {Component}
 */
class Weather extends Component {
	/**
	 * Constructs the weather component and sets up the state with defaults.
	 */
	constructor() {
		super();

		this.state = {
			temperature: 0,
			units: 'F',
		};
	}

	/**
	 * Sets the weather after the component mounts.
	 */
	componentDidMount() {
		this.getWeather('Diamond Bar, CA', 'F');
	}

	/**
	 * Gets the weather of a specific location.
	 * @param {string} location The location where to get the weather of.
	 * @param {string} [units='F']  Either 'C' or 'F'. Defaults to 'F'.
	 */
	getWeather(location, units='F') {
		weather(location, units).then(
			(info) => {
				this.setState({temperature: info.item.condition.temp});
			}
		);
	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<span className="weather">
				{this.state.temperature}&deg;{this.state.units}
			</span>
		);
	}
}

export default Weather;
