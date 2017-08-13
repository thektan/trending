import React, {Component} from 'react';
import weather from 'yahoo-weather';
import Isvg from 'react-inlinesvg';
import Clock from './Clock';
import Greeting from './Greeting';
import Weather from './Weather';
import logo from '../images/icon-small.svg';
import '../css/Logo.css';
import '../css/Header.css';

/**
 * Header on the top of the page. This is to show general information and
 * other menu options.
 *
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
	/**
	 * Initializes the state.
	 */
	constructor() {
		super();

		this.state = {
			temperature: '',
			unit: 'f',
		};
	}

	/**
	 * Get the current location and set the state.
	 */
	componentDidMount() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const lat = position.coords.latitude;
					const long = position.coords.longitude;

					this.getWeather(`(${lat},${long})`, this.state.unit);
				}
			);
		}
	}

	/**
	* Console if component updates for debugging purposes.
	*/
	componentDidUpdate() {
		console.log('Header component updated', this.state);
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
			<div className="header">
				<div className="header__section">
					<Clock format="llll" />

					<Greeting />
				</div>

				<div className="header__section header__section--center">
					<Isvg className="logo" src={logo}></Isvg>
				</div>

				<div className="header__section header__section--right">
					<Weather
						temperature={this.state.temperature}
						unit={this.state.unit}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
