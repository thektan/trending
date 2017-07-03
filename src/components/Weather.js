import React, {Component} from 'react';
import '../css/Weather.css';

/**
 * Shows the current weather.
 *
 * @class Weather
 * @extends {Component}
 */
class Weather extends Component {
	constructor() {
		super();

		this.state = {
			weather: 0,
		};
	}

	componentDidMount() {
		this.getWeather();
	}

	getWeather() {

	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="weather">

			</div>
		);
	}
}

export default Weather;
