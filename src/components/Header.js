import React, {Component} from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import Weather from './Weather';
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
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="header">
				<Greeting />

				<Clock format="LTS" />

				<Weather
					location='Diamond Bar, CA'
					unit='f'
				/>
			</div>
		);
	}
}

export default Header;
