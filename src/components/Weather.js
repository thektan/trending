import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';
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
	 * Renders the current temperature.
	 *
	 * @return {string}
	 */
	render() {
		return (
			<span className="weather">
				<Isvg className="weather__icon" src={iconSun}></Isvg>

				<span>{this.props.temperature}&deg;{this.props.unit}</span>
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
