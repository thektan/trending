import React, {Component} from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import Weather from './Weather';
import Isvg from 'react-inlinesvg';
import iconLogo from '../images/icon-logo.svg';
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
	* Console if component updates for debugging purposes.
	*/
	componentDidUpdate() {
		console.log('Header component updated', this.state);
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
					<Isvg className="logo" src={iconLogo}></Isvg>
				</div>

				<div className="header__section header__section--right">
					<Weather
						location={this.props.weatherLocation}
						unit={this.props.weatherUnit}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
