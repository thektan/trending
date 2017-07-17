import React, {Component} from 'react';
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
				{this.props.temperature}&deg;{this.props.unit}
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
