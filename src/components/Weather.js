import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
			units: 'f',
		};
	}

	/**
	 * Sets the weather after the component mounts.
	 */
	componentDidMount() {
		this.getWeather(this.props.location, this.props.unit);
	}

	/**
	 * Gets the weather of a specific location.
	 * @param {string} location The location where to get the weather of.
	 * @param {string} [unit='f']  Either 'c' or 'f'. Defaults to 'f'.
	 */
	getWeather(location, unit='f') {
		weather(location, unit).then(
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

Weather.propTypes = {
	location: PropTypes.string,

	unit: (props, propName, componentName) => {
		const value = props[propName].toLowerCase();

		if (value !== 'c' && value !== 'f') {
			return new Error(
				'Invalid prop `' + propName + '` supplied to' +
				' `' + componentName + '`. Validation failed.'
			);
		}
	},
};

export default Weather;
