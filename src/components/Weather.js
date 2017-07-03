import React, {Component} from 'react';
import weather from 'weather-js';
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
		weather.find(
			{
				search: 'San Francisco, CA',
				degreeType: 'F',
			},
			(err, result) => {
				if (err) console.log(err);

				console.log(JSON.stringify(result, null, 2));

				this.setState({weather: 0});
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
			<div className="weather">

			</div>
		);
	}
}

export default Weather;
