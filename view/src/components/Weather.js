import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';
import weather from 'yahoo-weather';
import iconSun from '../images/icon-sun.svg';
import '../css/Weather.css';

/**
 * Shows the current weather.
 *
 * @class Weather
 * @extends {Component}
 */
class Weather extends Component {
	/**
	 * Initializes state.
	 */
	constructor() {
		super();

		this.state = {
			temperature: '?',
		};
	}

	/**
	 * Get the current location and set the state.
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
	 * Renders the current temperature.
	 *
	 * @return {string}
	 */
	render() {
		return (
			<span className="weather">
				<Isvg className="weather__icon" src={iconSun}></Isvg>

				<span>{this.state.temperature}&deg;{this.props.unit}</span>
			</span>
		);
	}
}

Weather.propTypes = {
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
